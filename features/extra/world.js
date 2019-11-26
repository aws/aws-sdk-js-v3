var world = require('./helpers');
var path = require('path');

try {
  world.config.loadFromPath(path.resolve('./configuration'));
} catch (e) {} finally {
  process.env['CONFIGURED_REGION'] = world.config.region || 'us-west-2';
}

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
