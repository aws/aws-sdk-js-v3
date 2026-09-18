const esbuild = require("esbuild");
const path = require("node:path");

const buildOptions = {
  platform: "browser",
  target: ["chrome120"],
  bundle: true,
  format: "esm",
  mainFields: ["module", "browser", "main"],
  conditions: ["browser", "module", "import", "default"],
  allowOverwrite: true,
  entryPoints: [path.join(__dirname, "..", "..", "dist-es", "submodules", "transfer-manager", "index.browser.js")],
  supported: {
    "dynamic-import": false,
  },
  outfile: path.join(__dirname, "browser-transfer-manager-bundle.js"),
  external: ["node:*"],
};

esbuild.build(buildOptions).catch((e) => {
  console.error(e);
  process.exit(1);
});
