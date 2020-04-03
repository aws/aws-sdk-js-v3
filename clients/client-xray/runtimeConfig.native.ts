import { name, version } from "./package.json";
import { Sha256 } from "@aws-crypto/sha256-js";
import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";
import { streamCollector } from "@aws-sdk/stream-collector-native";
import { parseUrl } from "@aws-sdk/url-parser-browser";
import { ClientDefaults } from "./XRayClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  defaultUserAgent: `aws-sdk-js-v3-react-native-${name}/${version}`,
  requestHandler: new FetchHttpHandler({ bufferBody: true }),
  sha256: Sha256,
  streamCollector,
  urlParser: parseUrl
};
