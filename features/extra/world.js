var world = require("./helpers");
var fs = require("fs");
var path = require("path");

try {
  world.config = JSON.parse(fs.readFileSync(path.resolve("./configuration")));
} catch (e) {
} finally {
  process.env["CONFIGURED_REGION"] = "us-west-2";
}

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
