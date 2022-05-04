// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import {
  ListWorkGroupsCommand,
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput,
} from "../commands/ListWorkGroupsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListWorkGroupsCommandInput,
  ...args: any
): Promise<ListWorkGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListWorkGroupsCommandInput,
  ...args: any
): Promise<ListWorkGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkGroups(input, ...args);
};
export async function* paginateListWorkGroups(
  config: AthenaPaginationConfiguration,
  input: ListWorkGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
