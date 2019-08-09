import { ElasticsearchServiceClient } from "../../ElasticsearchServiceClient";
import { ListDomainNamesCommand } from "../../commands/ListDomainNamesCommand";
import { DescribeElasticsearchDomainCommand } from "../../commands/DescribeElasticsearchDomainCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Elasticsearch Service.");

  await (async () => {
    const client = new ElasticsearchServiceClient({
      region: defaultRegion
    });

    const command = new ListDomainNamesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Elasticsearch Service ListDomainNames - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Elasticsearch Service ListDomainNames - no error expected from service"
      );
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new ElasticsearchServiceClient({
      region: defaultRegion
    });

    const command = new DescribeElasticsearchDomainCommand({
      DomainName: "not-a-domain"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Elasticsearch Service DescribeElasticsearchDomain - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Elasticsearch Service DescribeElasticsearchDomain - error expected from service"
      );
    }
  })();

  if (testFailed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// execute the test runner
smokeTestRunner();
