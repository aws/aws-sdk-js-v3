import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListTypeVersionsCommand,
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput,
} from "../commands/ListTypeVersionsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListTypeVersionsCommandInput,
  ...args: any
): Promise<ListTypeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTypeVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListTypeVersionsCommandInput,
  ...args: any
): Promise<ListTypeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listTypeVersions(input, ...args);
};
export async function* listTypeVersionsPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListTypeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTypeVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTypeVersionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
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
