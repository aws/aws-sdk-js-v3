const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const repl = require("node:repl");

const modelsPath = join(__dirname, "..", "..", "..", "codegen", "sdk-codegen", "aws-models");
const { createDynamicClient: _createDynamicClient } = require("../dist-cjs/createDynamicClient");

function loadModel(name) {
  return JSON.parse(readFileSync(join(modelsPath, name + ".json"), "utf8"));
}

function createDynamicClient(astOrName, ...rest) {
  const ast = typeof astOrName === "string" ? loadModel(astOrName) : astOrName;
  return _createDynamicClient(ast, ...rest);
}

const r = repl.start({ prompt: "dynamic> " });
r.context.loadModel = loadModel;
r.context.createDynamicClient = createDynamicClient;
