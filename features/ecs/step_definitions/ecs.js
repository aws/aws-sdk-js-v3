<<<<<<< HEAD
var { ECS } = require('../../../clients/node/client-ecs-node');

module.exports = function() {
  this.Before("@ecs", function (callback) {
    this.service = new ECS({});
=======
module.exports = function() {
  this.Before("@ecs", function (callback) {
    this.service = new this.AWS.ECS();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
