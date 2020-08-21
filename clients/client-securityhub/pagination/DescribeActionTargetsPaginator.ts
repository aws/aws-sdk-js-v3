import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import {
  DescribeActionTargetsCommand,
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "../commands/DescribeActionTargetsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeActionTargetsCommandInput,
  ...args: any
): Promise<DescribeActionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeActionTargetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeActionTargetsCommandInput,
  ...args: any
): Promise<DescribeActionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.describeActionTargets(input, ...args);
};
export async function* describeActionTargetsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: DescribeActionTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeActionTargetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeActionTargetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
