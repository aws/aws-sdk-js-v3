const world = require("./helpers");
const fs = require("fs");
const path = require("path");

try {
  world.config = JSON.parse(fs.readFileSync(path.resolve("./configuration")));
} catch (e) {
} finally {
  process.env["CONFIGURED_REGION"] = "us-west-2";
}

const WorldConstructor = function WorldConstructor() {
  return world;
};

exports.World = WorldConstructor;
