import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackSetsCommand,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
} from "../commands/ListStackSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackSetsCommandInput,
  ...args: any
): Promise<ListStackSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackSetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackSetsCommandInput,
  ...args: any
): Promise<ListStackSetsCommandOutput> => {
  // @ts-ignore
  return await client.listStackSets(input, ...args);
};
export async function* listStackSetsPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListStackSetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
