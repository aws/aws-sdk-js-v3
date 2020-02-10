import { parseUrl } from "@aws-sdk/url-parser-node";
import { name, version } from "./package.json";
import { ClientDefaults } from "./ElasticInferenceClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  urlParser: parseUrl,
  defaultUserAgent: `aws-sdk-js-v3-react-native-${name}/${version}`,
  runtime: "browser",
  signingName: "elastic-inference"
};
