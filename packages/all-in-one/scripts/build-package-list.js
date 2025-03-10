const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..", "..");

const clients = path.join(root, "clients");
const packages = path.join(root, "packages");
const lib = path.join(root, "lib");
const ktlo = path.join(root, "deprecated", "packages");

const pkgJson = require("../package.json");

pkgJson.dependencies = pkgJson.dependencies ?? {};

const folders = (p) =>
  fs.readdirSync(p).filter((f) => {
    return fs.existsSync(path.join(p, f, "package.json"));
  });

for (const package of [...folders(clients), ...folders(packages), ...folders(lib)]) {
  pkgJson.dependencies[`@aws-sdk/${package}`] = "*";
}

for (const package of folders(ktlo)) {
  pkgJson.dependencies[`@aws-sdk/${package}`] = "latest";
}

delete pkgJson.dependencies["@aws-sdk/karma-credential-loader"];

fs.writeFileSync(path.join(__dirname, "..", "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");
