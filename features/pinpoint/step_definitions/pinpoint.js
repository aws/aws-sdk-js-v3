var { Pinpoint } = require("../../../clients/client-pinpoint");

module.exports = function() {
  this.Before("@pinpoint", function(callback) {
    this.service = new Pinpoint({});
    callback();
  });

  this.Given(/^I create an application$/, function(callback) {
    const params = {
      CreateApplicationRequest: {
        Name: this.uniqueName("aws-sdk-js-integration")
      }
    };
    this.request(null, "createApp", params, function(err, data) {
      if (err) {
        callback(err);
      }
      this.applicationId = this.data.ApplicationResponse.Id;
      callback();
    });
  });

  this.Given(/^I run the "putEvents" operation with EventsRequest:$/, function(
    eventsRequest,
    callback
  ) {
    this.request(
      null,
      "putEvents",
      {
        ApplicationId: this.applicationId,
        EventsRequest: JSON.parse(eventsRequest)
      },
      callback,
      false
    );
  });

  this.Given(/^I delete the application$/, function(callback) {
    this.request(
      null,
      "deleteApp",
      {
        ApplicationId: this.applicationId
      },
      callback,
      false
    );
  });
};
