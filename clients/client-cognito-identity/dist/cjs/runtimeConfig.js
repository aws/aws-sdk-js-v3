"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const region_provider_1 = require("@aws-sdk/region-provider");
const hash_node_1 = require("@aws-sdk/hash-node");
const node_http_handler_1 = require("@aws-sdk/node-http-handler");
const url_parser_node_1 = require("@aws-sdk/url-parser-node");
const util_body_length_node_1 = require("@aws-sdk/util-body-length-node");
const stream_collector_node_1 = require("@aws-sdk/stream-collector-node");
const util_utf8_node_1 = require("@aws-sdk/util-utf8-node");
const util_base64_node_1 = require("@aws-sdk/util-base64-node");
const util_user_agent_node_1 = require("@aws-sdk/util-user-agent-node");
const package_json_1 = require("./package.json");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
exports.ClientDefaultValues = Object.assign(Object.assign({}, runtimeConfig_shared_1.ClientSharedValues), { requestHandler: new node_http_handler_1.NodeHttpHandler(), sha256: hash_node_1.Hash.bind(null, "sha256"), urlParser: url_parser_node_1.parseUrl, bodyLengthChecker: util_body_length_node_1.calculateBodyLength, streamCollector: stream_collector_node_1.streamCollector, base64Decoder: util_base64_node_1.fromBase64, base64Encoder: util_base64_node_1.toBase64, utf8Decoder: util_utf8_node_1.fromUtf8, utf8Encoder: util_utf8_node_1.toUtf8, defaultUserAgent: util_user_agent_node_1.defaultUserAgent(package_json_1.name, package_json_1.version), runtime: "node", credentialDefaultProvider: ((options) => {
        try {
            return credential_provider_node_1.defaultProvider(options);
        }
        catch (e) { }
        return {};
    }), regionDefaultProvider: region_provider_1.defaultProvider });
//# sourceMappingURL=runtimeConfig.js.map