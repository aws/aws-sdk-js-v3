const fs = require("fs");
const path = require("path");

// Read the package.json file
const packageJson = require("../../package.json");

// Create the version file content
const versionFileContent = `{ "version":"${packageJson.version}"  }`;

// Write to a new file
const outputPath = path.join(__dirname, "../../version.json");
fs.writeFileSync(outputPath, versionFileContent);
