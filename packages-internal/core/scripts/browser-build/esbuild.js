const esbuild = require("esbuild");
const path = require("node:path");

module.exports = async function setup() {
  await esbuild.build({
    platform: "browser",
    target: ["chrome120"],
    bundle: true,
    format: "esm",
    mainFields: ["module", "browser", "main"],
    allowOverwrite: true,
    entryPoints: [path.join(__dirname, "entry.js")],
    supported: {
      "dynamic-import": false,
    },
    outfile: path.join(__dirname, "browser-dynamodb-bundle.js"),
    external: [],
  });
};
