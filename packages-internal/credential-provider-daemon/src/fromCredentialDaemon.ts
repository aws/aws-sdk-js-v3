import { setCredentialFeature } from "@aws-sdk/core/client";
import type {
  AwsIdentityProperties,
  CredentialProviderOptions,
  RuntimeConfigAwsCredentialIdentityProvider,
} from "@aws-sdk/types";

import {
  CREDENTIAL_NAME_PATTERN,
  CREDENTIAL_DAEMON_DOC,
  DEFAULT_CONNECT_TIMEOUT_MS,
  DEFAULT_TIMEOUT_MS,
} from "./constants";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";
import { parseCredentialDaemonReply } from "./parseCredentialDaemonReply";
import { sanitize } from "./sanitize";
import { requestCredentialDaemon } from "./requestCredentialDaemon";
import { resolveSocketPath } from "./resolveSocketPath";

/**
 * @internal
 */
export interface FromCredentialDaemonInit extends CredentialProviderOptions {
  /**
   * The name of the credential to get from the credential daemon (credential_daemon).
   */
  credential: string;
  /**
   * The SSO account ID to ask for. Sent only together with roleName.
   */
  accountId?: string;
  /**
   * The SSO role name to ask for. Sent only together with accountId.
   */
  roleName?: string;
  /**
   * Absolute path to the credential daemon socket. When set, it is used before AWS_CREDENTIAL_DAEMON_SOCKET and
   * $HOME/.aws/credential-daemon.sock. An empty or relative value counts as unset.
   */
  socketPath?: string;
  /**
   * Milliseconds to wait for the connection to the credential daemon. Defaults to 1000.
   */
  connectTimeout?: number;
  /**
   * Milliseconds to wait for the whole call to the credential daemon. Defaults to 5000.
   */
  timeout?: number;
}

const positiveOrDefault = (value: number | undefined, defaultValue: number): number =>
  typeof value === "number" && Number.isFinite(value) && value > 0 ? value : defaultValue;

/**
 * Creates a credential provider that gets short-lived credentials from the local credential daemon
 * over a Unix domain socket. Failures are CredentialDaemonProviderError, which never lets a
 * credential chain try the next provider.
 * @internal
 */
export const fromCredentialDaemon =
  (init: FromCredentialDaemonInit): RuntimeConfigAwsCredentialIdentityProvider =>
  async (_awsIdentityProperties?: AwsIdentityProperties) => {
    const { credential, accountId, roleName, logger } = init;
    logger?.debug("@aws-sdk/credential-provider-daemon - fromCredentialDaemon");

    if (typeof credential !== "string" || !CREDENTIAL_NAME_PATTERN.test(credential)) {
      throw new CredentialDaemonProviderError(
        `credential_daemon '${sanitize(String(credential ?? ""))}' is invalid: use 1-64 ASCII letters, ` +
          `digits, '.', '_' or '-', not starting with '.'.`,
        "INVALID_CONFIG",
        { logger }
      );
    }

    if (process.platform !== "linux" && process.platform !== "darwin") {
      throw new CredentialDaemonProviderError(
        `The credential daemon is not supported on platform '${process.platform}', see ${CREDENTIAL_DAEMON_DOC}.`,
        "UNSUPPORTED_PLATFORM",
        { logger }
      );
    }

    const socketPath = await resolveSocketPath(process.env, logger, init.socketPath);
    const params = {
      credential,
      ...(accountId && roleName ? { account_id: accountId, role_name: roleName } : {}),
    };
    const reply = await requestCredentialDaemon(
      socketPath,
      { jsonrpc: "2.0", id: 1, method: "credential/get", params },
      {
        connectTimeout: positiveOrDefault(init.connectTimeout, DEFAULT_CONNECT_TIMEOUT_MS),
        timeout: positiveOrDefault(init.timeout, DEFAULT_TIMEOUT_MS),
        logger,
      }
    );
    return setCredentialFeature(parseCredentialDaemonReply(reply, credential, logger), "CREDENTIAL_DAEMON", "Aq");
  };
