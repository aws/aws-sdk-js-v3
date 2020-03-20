import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";
import { Sha256 } from "@aws-crypto/sha256-js";
import { streamCollector } from "@aws-sdk/stream-collector-native";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { name, version } from "./package.json";
import { ClientDefaults } from "./PersonalizeEventsClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  requestHandler: new FetchHttpHandler({ bufferBody: true }),
  sha256: Sha256,
  streamCollector,
  urlParser: parseUrl,
  defaultUserAgent: `aws-sdk-js-v3-react-native-${name}/${version}`,
  runtime: "react-native"
};
