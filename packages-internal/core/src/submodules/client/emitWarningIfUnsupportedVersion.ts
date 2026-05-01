// Stores whether the warning was already emitted.
export const state = {
  warningEmitted: false,
};

/**
 * Emits warning if the provided Node.js version string is
 * pending deprecation by AWS SDK JSv3.
 * @internal
 *
 * @param version - The Node.js version string.
 */
export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && !state.warningEmitted) {
    if (process.env.AWS_SDK_JS_NODE_VERSION_SUPPORT_WARNING_DISABLED === "true") {
      state.warningEmitted = true;
      return;
    }
    const userMajorVersion = parseInt(version.substring(1, version.indexOf(".")));

    // (For text spacing)
    // Recommended minimum major version.
    const vv = 22;

    if (userMajorVersion < vv) {
      state.warningEmitted = true;
      process.emitWarning(
        `NodeVersionSupportWarning: The AWS SDK for JavaScript (v3)
versions published after the first week of January 2027
will require node >=${vv}. You are running node ${version}.

To continue receiving updates to AWS services, bug fixes,
and security updates please upgrade to node >=${vv}.

More information can be found at: https://a.co/c895JFp`
      );
    }
  }
};
