/**
 * Where users can read how to install, start and sign in to the credential daemon.
 * @internal
 */
export const CREDENTIAL_DAEMON_DOC =
  "https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-credential-daemon.html";

/**
 * Environment variable holding an absolute path to the credential daemon socket.
 * @internal
 */
export const ENV_CREDENTIAL_DAEMON_SOCKET = "AWS_CREDENTIAL_DAEMON_SOCKET";

/**
 * @internal
 */
export const DEFAULT_CONNECT_TIMEOUT_MS = 1000;

/**
 * @internal
 */
export const DEFAULT_TIMEOUT_MS = 5000;

/**
 * The longest reply line accepted from the credential daemon, in bytes, not counting the newline.
 * @internal
 */
export const MAX_REPLY_LINE_BYTES = 64000;

/**
 * Valid values of daemon_credential.
 * @internal
 */
export const CREDENTIAL_NAME_PATTERN = /^[A-Za-z0-9_-][A-Za-z0-9._-]{0,63}$/;
