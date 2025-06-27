const esbuild = require("esbuild");
const path = require("path");

const buildOptions = {
  platform: "browser",
  target: ["chrome120"],
  bundle: true,
  format: "esm",
  mainFields: ["module", "browser", "main"],
  allowOverwrite: true,
  entryPoints: [path.join(__dirname, "..", "..", "dist-es", "index.js")],
  supported: {
    "dynamic-import": false,
  },
  outfile: path.join(__dirname, "browser-s3-bundle.js"),
  // packages: "external",
  external: [],
};

esbuild.build(buildOptions);
