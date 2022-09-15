const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@elastictranscoder" }, function () {
  const { S3 } = require("../../../clients/client-s3");
  const { IAM } = require("../../../clients/client-iam");
  const { ElasticTranscoder } = require("../../../clients/client-elastic-transcoder");
  this.iam = new IAM({});
  this.s3 = new S3({});
  this.service = new ElasticTranscoder({});
});

After({ tags: "@elastictranscoder" }, async function () {
  if (this.iamRoleName) {
    await this.iam.deleteRole({ RoleName: this.iamRoleName });
    this.iamRoleName = undefined;
  }
  if (this.pipelineId) {
    await this.service.deletePipeline({ Id: this.pipelineId });
    this.pipelineId = undefined;
  }
  if (this.bucket) {
    await this.s3.deleteBucket({ Bucket: this.bucket });
    this.bucket = undefined;
  }
});

Given("I create an Elastic Transcoder pipeline with name prefix {string}", async function (prefix) {
  this.pipelineName = this.uniqueName(prefix);
  const params = {
    Name: this.pipelineName,
    InputBucket: this.bucket,
    OutputBucket: this.bucket,
    Role: this.iamRoleArn,
    Notifications: {
      Progressing: "",
      Completed: "",
      Warning: "",
      Error: "",
    },
  };

  try {
    this.data = await this.service.createPipeline(params);
    this.pipelineId = this.data.Pipeline.Id;
  } catch (error) {
    this.error = error;
  }
});

Given("I list pipelines", async function () {
  this.data = await this.service.listPipelines({});
});

Then("the list should contain the pipeline", function () {
  const id = this.pipelineId;
  this.assert.contains(this.data.Pipelines, function (pipeline) {
    return pipeline.Id === id;
  });
});

Then("I pause the pipeline", async function () {
  this.data = await this.service.updatePipelineStatus({
    Id: this.pipelineId,
    Status: "Paused",
  });
});

Then("I read the pipeline", async function () {
  this.data = await this.service.readPipeline({ Id: this.pipelineId });
});

Then("the pipeline status should be {string}", function (status) {
  this.assert.equal(this.data.Pipeline.Status, status);
});
