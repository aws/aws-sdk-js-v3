const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const pkgJson = require(path.join(root, "package.json"));
const srcFolders = fs.readdirSync(path.join(root, "src"));

for (const srcFolder of srcFolders) {
  if (fs.lstatSync(path.join(root, "src", srcFolder)).isDirectory()) {
    if (!pkgJson.exports["./" + srcFolder]) {
      throw new Error(`${srcFolder} is missing exports statement in package.json`);
    }
  }
}
