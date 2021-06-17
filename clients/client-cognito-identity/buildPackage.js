const { readFileSync, writeFileSync } = require("fs");

const encoding = "utf8";
const file = readFileSync("./package.json", { encoding });
writeFileSync("./dist/es/package.js", `export default ${file}`, { encoding });
