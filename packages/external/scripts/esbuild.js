const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

(async () => {
  const packages = fs.readdirSync(path.join(__dirname, "..", "src", "packages"));

  for (const pkg of packages) {
    await esbuild.build({
      platform: "node",
      target: ["node14"],
      bundle: true,
      format: "cjs",
      mainFields: ["module", "main"],
      allowOverwrite: true,
      entryPoints: [path.join(__dirname, "..", "src", "packages", pkg, "index.ts")],
      supported: {
        "dynamic-import": false,
      },
      outfile: path.join(__dirname, "..", "dist-cjs", "packages", pkg, "index.js"),
      keepNames: true,
      external: [],
    });
  }
})();
