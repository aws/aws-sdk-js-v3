import type { Logger } from "@smithy/types";
import { promises as fsPromises } from "node:fs";
import { posix } from "node:path";

import { CREDENTIAL_DAEMON_DOC, ENV_CREDENTIAL_DAEMON_SOCKET } from "./constants";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";
import { sanitize } from "./sanitize";

/**
 * The home path, `.aws/credential-daemon.sock`, relative to HOME.
 * @internal
 */
export const HOME_SOCKET_PATH = posix.join(".aws", "credential-daemon.sock");

const HOME_SOCKET_DISPLAY = `$HOME/${HOME_SOCKET_PATH}`;

const isAbsolutePath = (value: string | undefined): value is string =>
  typeof value === "string" && value !== "" && posix.isAbsolute(value);

const getErrorCode = (e: unknown): string | undefined => (e as NodeJS.ErrnoException | undefined)?.code;

/**
 * Returns the one socket path to connect to, in order:
 * 1. The provider's socketPath setting, when it is an absolute path. An empty or relative value counts as unset.
 * 2. AWS_CREDENTIAL_DAEMON_SOCKET, when it is an absolute path. An empty or relative value counts as unset.
 * 3. The home path, `$HOME/.aws/credential-daemon.sock`, when anything is there: a socket, a symbolic link, a link
 *    whose target is missing, or another file. It is checked with lstat, so errors name the link, not its
 *    target. HOME is read from the environment, as the credential daemon does. An unset, empty or relative
 *    HOME is skipped, because a relative path would resolve under the working directory, where another user
 *    could place a socket.
 *
 * It raises NOT_RUNNING, and the caller connects to nothing, when no location applies or when the home path
 * is a link whose target is missing. It is looked up again on every call, and a failed connection never falls back
 * to another path, because each location can be a different daemon with different credentials.
 * @internal
 */
export const resolveSocketPath = async (
  env: Record<string, string | undefined> = process.env,
  logger?: Logger,
  socketPath?: string
): Promise<string> => {
  if (isAbsolutePath(socketPath)) {
    return socketPath;
  }

  const fromEnv = env[ENV_CREDENTIAL_DAEMON_SOCKET];
  if (isAbsolutePath(fromEnv)) {
    return fromEnv;
  }

  const home = env.HOME;
  const homeSocketPath = isAbsolutePath(home) ? posix.join(home, HOME_SOCKET_PATH) : undefined;
  if (homeSocketPath) {
    let isLink: boolean | undefined = undefined;
    try {
      isLink = (await fsPromises.lstat(homeSocketPath)).isSymbolicLink();
    } catch {
      // nothing is at the home path, so it doesn't apply.
    }
    if (isLink === false) {
      return homeSocketPath;
    }
    if (isLink === true) {
      try {
        await fsPromises.stat(homeSocketPath);
      } catch (e) {
        if (getErrorCode(e) === "ENOENT") {
          const target = await fsPromises.readlink(homeSocketPath).catch(() => "<unreadable>");
          throw new CredentialDaemonProviderError(
            `The credential daemon socket ${homeSocketPath} is a link to ${sanitize(target)}, which does not exist. ` +
              `Start the credential daemon, or link ${HOME_SOCKET_DISPLAY} to its socket, ` +
              `see ${CREDENTIAL_DAEMON_DOC}.`,
            "NOT_RUNNING",
            { logger }
          );
        }
      }
      return homeSocketPath;
    }
  }

  const checked = homeSocketPath
    ? `nothing is at ${homeSocketPath}`
    : `${HOME_SOCKET_DISPLAY} was skipped because HOME is unset, empty or relative`;
  throw new CredentialDaemonProviderError(
    `No credential daemon socket was found: ${ENV_CREDENTIAL_DAEMON_SOCKET} is not set to an absolute path, and ` +
      `${checked}. Install the credential daemon or link its socket to ${HOME_SOCKET_DISPLAY}, or set ` +
      `${ENV_CREDENTIAL_DAEMON_SOCKET}, see ${CREDENTIAL_DAEMON_DOC}.`,
    "NOT_RUNNING",
    { logger }
  );
};
