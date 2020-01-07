"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalid_dependency_1 = require("@aws-sdk/invalid-dependency");
const fetch_http_handler_1 = require("@aws-sdk/fetch-http-handler");
const sha256_js_1 = require("@aws-crypto/sha256-js");
const stream_collector_native_1 = require("@aws-sdk/stream-collector-native");
const url_parser_node_1 = require("@aws-sdk/url-parser-node");
const package_json_1 = require("./package.json");
const runtimeConfig_browser_1 = require("./runtimeConfig.browser");
exports.ClientDefaultValues = Object.assign(Object.assign({}, runtimeConfig_browser_1.ClientDefaultValues), { requestHandler: new fetch_http_handler_1.FetchHttpHandler({ bufferBody: true }), sha256: sha256_js_1.Sha256, streamCollector: stream_collector_native_1.streamCollector, urlParser: url_parser_node_1.parseUrl, defaultUserAgent: `aws-sdk-js-v3-react-native-${package_json_1.name}/${package_json_1.version}`, runtime: "react-native", eventStreamSerdeProvider: () => ({
        serialize: invalid_dependency_1.invalidFunction("event stream is not supported in ReactNative."),
        deserialize: invalid_dependency_1.invalidFunction("event stream is not supported in ReactNative.")
    }) });
//# sourceMappingURL=runtimeConfig.native.js.map