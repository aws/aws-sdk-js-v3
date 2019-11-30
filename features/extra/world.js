var world = require('./helpers');
<<<<<<< HEAD
var fs = require('fs');
var path = require('path');

try {
  world.config = JSON.parse(
    fs.readFileSync(path.resolve('./configuration'))
  );
} catch (e) {} finally {
  process.env['CONFIGURED_REGION'] = 'us-west-2';
=======
var path = require('path');

world.AWS = require('../../lib/aws');
try {
  world.AWS.config.loadFromPath(path.resolve('./configuration'));
} catch (e) {} finally {
  process.env['CONFIGURED_REGION'] = world.AWS.config.region || new world.AWS.Config().region;
>>>>>>> chore: copy v2 integ tests to v3 (#479)
}

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
