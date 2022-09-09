const { Before } = require("cucumber");

Before({ tags: "@sqs" }, async function (scenario) {
  const { SQS } = require("../../../clients/client-sqs");
  this.service = new SQS({
    region: "us-east-1",
  });
  this.createdQueues = [];

  // delete any stale queues found before the test starts.
  const list = await this.service.listQueues({});
  for (const url of list.QueueUrls || []) {
    try {
      if (url.includes("aws-js-sdk-")) {
        const created = Number(url.split("aws-js-sdk-")[1]);
        const now = Date.now();
        const dateLimit = new Date("2022-01-01").getTime();
        const ONE_HOUR = 60 * 60 * 1000;

        // Avoid deleting any queues created very recently,
        // since another test could be running against them.

        if (now - created > ONE_HOUR && created > dateLimit) {
          await this.service.deleteQueue({
            QueueUrl: url,
          });
          console.log("Deleting stale SQS queue", url, "created at", new Date(created));
        } else {
          console.log("Skipping cleanup of", url, "created at", new Date(created));
        }
      }
    } catch (e) {
      // queue cleanup errors are considered non-fatal to E2E.
      console.warn("Error during SQS queue cleanup: ", e);

      // potential throttling issue, wait and continue.
      console.log("Waiting 1s.");
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
});
