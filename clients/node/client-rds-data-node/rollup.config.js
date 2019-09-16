// import multiEntry from "rollup-plugin-multi-entry";
// import cjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
// import shim from "rollup-plugin-shim";
// import visualizer from "rollup-plugin-visualizer";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import importJson from "rollup-plugin-json";

const pkg = require("./package.json");
const version = pkg.version;
const depNames = Object.keys(pkg.dependencies);
const production = process.env.NODE_ENV === "production";

export function browserConfig(test = false, production = false) {
  const baseConfig = {
    input: "dist/es/index.js",
    output: {
      file: "dist/browser/rds-data-browser.js",
      format: "esm",
      sourcemap: true
    },
    preserveSymlinks: false,
    external: [...depNames],
    plugins: [
      replace({
        include: ["dist/es/*Configuration.js"],
        delimiters: ["", ""],
        values: {
          'from "@aws-sdk/node-http-handler"':
            "from '@aws-sdk/fetch-http-handler'",
          "__aws_sdk_http_handler.NodeHttpHandler(configuration)":
            "__aws_sdk_http_handler.FetchHttpHandler(configuration)"
        }
      }),
      replace({
        include: ["dist/es/*Configuration.js"],
        delimiters: ["", ""],
        values: {
          'import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node"':
            'import * as __aws_sdk_invalid_dependency from "@aws-sdk/invalid-dependency"',
          "__aws_sdk_credential_provider_node.defaultProvider":
            "__aws_sdk_invalid_dependency.invalidFunction('Credentials is required')"
        }
      }),
      replace({
        include: ["dist/es/*Configuration.js"],
        delimiters: ["", ""],
        values: {
          'import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node"':
            'import * as __aws_sdk_invalid_dependency from "@aws-sdk/invalid-dependency"',
          "__aws_sdk_credential_provider_node.defaultProvider":
            "__aws_sdk_invalid_dependency.invalidFunction('Credentials is required')"
        }
      }),
      replace({
        include: ["dist/es/*Configuration.js"],
        delimiters: ["", ""],
        values: {
          'import * as __aws_sdk_util_body_length_node from "@aws-sdk/util-body-length-node"':
            'import * as __aws_sdk_util_body_length_browser from "@aws-sdk/util-body-length-browser"',
          " defaultValue: __aws_sdk_util_body_length_node":
            " defaultValue: __aws_sdk_util_body_length_browser"
        }
      }),
      importJson(),
      resolve(),
      sourcemaps()
    ]
  };

  return baseConfig;
}

export default browserConfig(false, false);
