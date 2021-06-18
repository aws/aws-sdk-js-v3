const { readFileSync, writeFileSync } = require("fs");

const encoding = "utf8";
const file = readFileSync("./package.json", { encoding });
const code = `export default ${file}`;
writeFileSync("./dist/es/package.js", code, { encoding });
writeFileSync("./dist/cjs/package.js", code, { encoding });
