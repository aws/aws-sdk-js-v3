// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataBrew,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.listProjects(input, ...args);
};
export async function* paginateListProjects(
  config: DataBrewPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataBrew) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataBrewClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataBrew | DataBrewClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
