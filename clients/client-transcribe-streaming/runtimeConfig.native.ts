import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-js";
import { WebSocketHandler, eventStreamPayloadHandler } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { ClientDefaults } from "./TranscribeStreamingClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  defaultUserAgent: defaultUserAgent(packageInfo.name, packageInfo.version),
  eventStreamPayloadHandlerProvider: () => eventStreamPayloadHandler,
  requestHandler: new WebSocketHandler(),
  sha256: Sha256,
  urlParser: parseUrl,
};
