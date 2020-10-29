const { __esModule } = require("typedoc-plugin-lerna-packages/dist/plugin");

module.exports = {
  exclude: ["**/node_modules/**", "./protocols/*.ts", "./e2e/*.ts", "./endpoints.ts"],
  excludedNotExported: true,
  excludePrivate: true,
  hideGenerator: true,
  ignoreCompilerErrors: true,
  inputFiles: ["./index.ts"],
  mode: "file",
  out: "./docs",
  theme: "minimal",
  plugin: "@aws-sdk/client-documentation-generator",
};
