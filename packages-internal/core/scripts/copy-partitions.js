const { resolve } = require("node:path");
const { writeFileSync } = require("node:fs");

const root = resolve(__dirname, "..");
const partitionsInfo = require(resolve(root, "..", "util-endpoints", "src", "lib", "aws", "partitions.json"));

writeFileSync(
  resolve(root, "src", "submodules", "client", "util-endpoints", "lib", "aws", "partitions.ts"),
  "export const partitionsInfo = " + JSON.stringify(partitionsInfo, null, 2) + ";\n"
);
