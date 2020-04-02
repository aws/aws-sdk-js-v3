var {
  ElasticTranscoder
} = require("../../../clients/client-elastic-transcoder");
var { S3 } = require("../../../clients/client-s3");
var { IAM } = require("../../../clients/client-iam");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@elastictranscoder" }, function(scenario, callback) {
  this.iam = new IAM({});
  this.s3 = new S3({});
  this.service = new ElasticTranscoder({});
  callback();
});

Given(
  /^I create an Elastic Transcoder pipeline with name prefix "([^"]*)"$/,
  function(prefix, callback) {
    this.pipelineName = this.uniqueName(prefix);
    var params = {
      Name: this.pipelineName,
      InputBucket: this.bucket,
      OutputBucket: this.bucket,
      Role: this.iamRoleArn,
      Notifications: {
        Progressing: "",
        Completed: "",
        Warning: "",
        Error: ""
      }
    };

    var world = this;
    var next = function() {
      if (world.data) world.pipelineId = world.data.Pipeline.Id;
      callback();
    };

    this.request(null, "createPipeline", params, next, false);
  }
);

Given(/^I list pipelines$/, function(callback) {
  this.request(null, "listPipelines", {}, callback);
});

Then(/^the list should contain the pipeline$/, function(callback) {
  var id = this.pipelineId;
  this.assert.contains(this.data.Pipelines, function(pipeline) {
    return pipeline.Id === id;
  });
  callback();
});

Then(/^I pause the pipeline$/, function(callback) {
  this.request(
    null,
    "updatePipelineStatus",
    {
      Id: this.pipelineId,
      Status: "Paused"
    },
    callback
  );
});

Then(/^I read the pipeline$/, function(callback) {
  this.request(
    null,
    "readPipeline",
    {
      Id: this.pipelineId
    },
    callback
  );
});

Then(/^the pipeline status should be "([^"]*)"$/, function(status, callback) {
  this.assert.equal(this.data.Pipeline.Status, status);
  callback();
});

Then(/^I delete the pipeline$/, function(callback) {
  this.request(
    null,
    "deletePipeline",
    {
      Id: this.pipelineId
    },
    callback
  );
});
