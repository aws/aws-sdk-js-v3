"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventstream_serde_browser_1 = require("@aws-sdk/eventstream-serde-browser");
const invalid_dependency_1 = require("@aws-sdk/invalid-dependency");
const sha256_browser_1 = require("@aws-crypto/sha256-browser");
const fetch_http_handler_1 = require("@aws-sdk/fetch-http-handler");
const url_parser_browser_1 = require("@aws-sdk/url-parser-browser");
const util_body_length_browser_1 = require("@aws-sdk/util-body-length-browser");
const stream_collector_browser_1 = require("@aws-sdk/stream-collector-browser");
const util_utf8_browser_1 = require("@aws-sdk/util-utf8-browser");
const util_base64_browser_1 = require("@aws-sdk/util-base64-browser");
const util_user_agent_browser_1 = require("@aws-sdk/util-user-agent-browser");
const package_json_1 = require("./package.json");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
exports.ClientDefaultValues = Object.assign(Object.assign({}, runtimeConfig_shared_1.ClientSharedValues), { requestHandler: new fetch_http_handler_1.FetchHttpHandler(), sha256: sha256_browser_1.Sha256, urlParser: url_parser_browser_1.parseUrl, bodyLengthChecker: util_body_length_browser_1.calculateBodyLength, streamCollector: stream_collector_browser_1.streamCollector, base64Decoder: util_base64_browser_1.fromBase64, base64Encoder: util_base64_browser_1.toBase64, utf8Decoder: util_utf8_browser_1.fromUtf8, utf8Encoder: util_utf8_browser_1.toUtf8, defaultUserAgent: util_user_agent_browser_1.defaultUserAgent(package_json_1.name, package_json_1.version), runtime: "browser", credentialDefaultProvider: invalid_dependency_1.invalidFunction("Credential is missing"), regionDefaultProvider: invalid_dependency_1.invalidFunction("Region is missing"), eventStreamSerdeProvider: eventstream_serde_browser_1.eventStreamSerdeProvider });
//# sourceMappingURL=runtimeConfig.browser.js.map