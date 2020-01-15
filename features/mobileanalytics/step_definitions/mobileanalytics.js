// To be replaced by PinPoint
// var { MobileAnalytics } = require("../../../clients/client-mobile-analytics");

module.exports = function() {
  this.Before("@mobileanalytics", function(callback) {
    this.service = new MobileAnalytics({});
    callback();
  });

  // Add step definitions
};
