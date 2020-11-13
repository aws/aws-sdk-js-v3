import { Batch } from "../Batch";
import { BatchClient } from "../BatchClient";
import {
  DescribeComputeEnvironmentsCommand,
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "../commands/DescribeComputeEnvironmentsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BatchClient,
  input: DescribeComputeEnvironmentsCommandInput,
  ...args: any
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeComputeEnvironmentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Batch,
  input: DescribeComputeEnvironmentsCommandInput,
  ...args: any
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.describeComputeEnvironments(input, ...args);
};
export async function* describeComputeEnvironmentsPaginate(
  config: BatchPaginationConfiguration,
  input: DescribeComputeEnvironmentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeComputeEnvironmentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeComputeEnvironmentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Batch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Batch | BatchClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
