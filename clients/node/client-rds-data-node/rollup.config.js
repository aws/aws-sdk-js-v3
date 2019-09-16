// import multiEntry from "rollup-plugin-multi-entry";
// import cjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
// import shim from "rollup-plugin-shim";
// import visualizer from "rollup-plugin-visualizer";
import replace from "rollup-plugin-replace";

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
      sourcemaps(),
      replace({
        include: "*Configuration.js",
        delimiters: ["", ""],
        values: {
          'from "@aws-sdk/node-http-handler"':
            'from "@aws-sdk/fetch-http-handler"'
        }
      })
    ]
  };

  if (test) {
    baseConfig.input = [
      "dist-esm/test/*.spec.js",
      "dist-esm/test/browser/*.spec.js"
    ];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));
    baseConfig.output.file = "dist-test/index.browser.js";
    // mark fs-extra as external
    baseConfig.external = ["fs-extra"];

    baseConfig.context = "null";

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  } else if (production) {
    baseConfig.output.file = "browser/azure-storage-blob.min.js";
    baseConfig.plugins.push(
      terser({
        output: {
          preamble: banner
        }
      })
      // Comment visualizer because it only works on Node.js 8+; Uncomment it to get bundle analysis report
      // visualizer({
      //   filename: "./statistics.html",
      //   sourcemap: true
      // })
    );
  }

  return baseConfig;
}

export default browserConfig(false, false);
