import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackResourcesCommand,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput,
} from "../commands/ListStackResourcesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackResourcesCommandInput,
  ...args: any
): Promise<ListStackResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackResourcesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackResourcesCommandInput,
  ...args: any
): Promise<ListStackResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listStackResources(input, ...args);
};
export async function* listStackResourcesPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListStackResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListStackResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListStackResourcesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
