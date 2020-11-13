import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import {
  DescribeModelVersionsCommand,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "../commands/DescribeModelVersionsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: DescribeModelVersionsCommandInput,
  ...args: any
): Promise<DescribeModelVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeModelVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: FraudDetector,
  input: DescribeModelVersionsCommandInput,
  ...args: any
): Promise<DescribeModelVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeModelVersions(input, ...args);
};
export async function* describeModelVersionsPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: DescribeModelVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeModelVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeModelVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
