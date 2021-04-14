import { Sha256 } from "@aws-crypto/sha256-js";
import { invalidFunction } from "@aws-sdk/invalid-dependency";
import { ClientDefaults } from "./LexRuntimeV2Client";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  eventStreamPayloadHandlerProvider: () => ({
    handle: invalidFunction("event stream request is not supported in ReactNative."),
  }),
  sha256: Sha256,
};
