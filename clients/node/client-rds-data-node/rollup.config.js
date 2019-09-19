import sourcemaps from "rollup-plugin-sourcemaps";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import importJson from "rollup-plugin-json";

const pkg = require("./package.json");
const depNames = Object.keys(pkg.dependencies);

export function browserConfig(test = false, production = false) {
  const baseConfig = {
    input: "dist/es/index.browser.js",
    output: {
      file: "dist/browser/rds-data-browser.js",
      format: "esm",
      sourcemap: true
    },
    preserveSymlinks: false,
    external: [...depNames],
    plugins: [
      replace(dependencyReplacement.base64),
      replace(dependencyReplacement.bodyLengthChecker),
      replace(dependencyReplacement.credentialProvider),
      replace(dependencyReplacement.httpHandler),
      replace(dependencyReplacement.regionProvider),
      replace(dependencyReplacement.sha256),
      replace(dependencyReplacement.streamCollector),
      replace(dependencyReplacement.urlParser),
      replace(dependencyReplacement.userAgent),
      replace(dependencyReplacement.utf8),
      importJson(),
      resolve(),
      sourcemaps()
    ]
  };

  return baseConfig;
}

export const ReplaceLocations = {
  CLIENT: "dist/es/*Client.js",
  CONFIGURATION: "dist/es/*Configuration.js",
}

export const dependencyReplacement = {
  userAgent: {
    include: [ReplaceLocations.CLIENT],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_util_user_agent_node from "@aws-sdk/util-user-agent-node"':
        'import * as __aws_sdk_util_user_agent_browser from "@aws-sdk/util-user-agent-browser"',
      '"User-Agent": __aws_sdk_util_user_agent_node':
        '"User-Agent": __aws_sdk_util_user_agent_browser'
    }
  },
  utf8: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_util_utf8_node from "@aws-sdk/util-utf8-node";': 'import * as __aws_sdk_util_utf8_browser from "@aws-sdk/util-utf8-browser"',
      'defaultValue: __aws_sdk_util_utf8_node':
        'defaultValue: __aws_sdk_util_utf8_browser',
    }
  },
  regionProvider: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_region_provider from "@aws-sdk/region-provider"': '',
      'defaultProvider: __aws_sdk_region_provider':
        'defaultProvider: {defaultProvider: __aws_sdk_invalid_dependency.invalidFunction("Credentials is required")}',
    }
  },
  urlParser: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_url_parser_node from "@aws-sdk/url-parser-node"':
        'import * as __aws_sdk_url_parser_browser from "@aws-sdk/url-parser-browser"',
      "defaultValue: __aws_sdk_url_parser_node":
        "defaultValue: __aws_sdk_url_parser_browser"
    }
  },
  streamCollector: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_stream_collector_node from "@aws-sdk/stream-collector-node"':
        'import * as __aws_sdk_stream_collector_browser from "@aws-sdk/stream-collector-browser"',
      "defaultValue: __aws_sdk_stream_collector_node.streamCollector":
        "defaultValue: __aws_sdk_stream_collector_browser.streamCollector"
    }
  },
  base64: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_util_base64_node from "@aws-sdk/util-base64-node"':
        'import * as __aws_sdk_util_base64_browser from "@aws-sdk/util-base64-browser"',
      "defaultValue: __aws_sdk_util_base64_node":
        "defaultValue: __aws_sdk_util_base64_browser"
    }
  },
  bodyLengthChecker: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_util_body_length_node from "@aws-sdk/util-body-length-node"':
        'import * as __aws_sdk_util_body_length_browser from "@aws-sdk/util-body-length-browser"',
      "defaultValue: __aws_sdk_util_body_length_node":
        "defaultValue: __aws_sdk_util_body_length_browser"
    }
  },
  sha256: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_hash_node from "@aws-sdk/hash-node"':
        'import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser"',
      'defaultValue: __aws_sdk_hash_node.Hash.bind(null, "sha256")':
        "defaultValue: __aws_crypto_sha256_browser.Sha256"
    }
  },
  credentialProvider: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node"':
        'import * as __aws_sdk_invalid_dependency from "@aws-sdk/invalid-dependency"',
      "__aws_sdk_credential_provider_node.defaultProvider":
        "__aws_sdk_invalid_dependency.invalidFunction('Credentials is required')"
    }
  },
  httpHandler: {
    include: [ReplaceLocations.CONFIGURATION],
    delimiters: ["", ""],
    values: {
      'from "@aws-sdk/node-http-handler"':
        "from '@aws-sdk/fetch-http-handler'",
      "__aws_sdk_http_handler.NodeHttpHandler(configuration)":
        "__aws_sdk_http_handler.FetchHttpHandler(configuration)"
    }
  }
}

export default browserConfig(false, false);