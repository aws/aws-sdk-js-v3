const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.join(__dirname, "..");

const pkgJson = require(path.join(root, "package.json"));
const submodules = fs.readdirSync(path.join(root, "src", "submodules"));

for (const submodule of submodules) {
  const submodulePath = path.join(root, "src", "submodules", submodule);
  if (fs.existsSync(submodulePath) && fs.lstatSync(submodulePath).isDirectory()) {
    if (!pkgJson.exports[`./${submodule}`]) {
      throw new Error(`${submodule} submodule is missing exports statement in package.json`);
    }
  }
}
