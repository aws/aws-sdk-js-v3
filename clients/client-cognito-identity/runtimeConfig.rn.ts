import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";
import { streamCollector } from "@aws-sdk/stream-collector-rn";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { name, version } from "./package.json";
import { ClientDefaults } from "./CognitoIdentityClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  requestHandler: new FetchHttpHandler({ bufferBody: true }),
  streamCollector,
  defaultUserAgent: `aws-sdk-js-v3-react-native ${name}/${version}`,
  urlParser: parseUrl,
  runtime: "react-native",
  signingName: "cognito-identity"
};
