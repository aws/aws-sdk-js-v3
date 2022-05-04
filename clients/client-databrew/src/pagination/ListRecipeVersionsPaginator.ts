// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRecipeVersionsCommand,
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
} from "../commands/ListRecipeVersionsCommand";
import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListRecipeVersionsCommandInput,
  ...args: any
): Promise<ListRecipeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecipeVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataBrew,
  input: ListRecipeVersionsCommandInput,
  ...args: any
): Promise<ListRecipeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listRecipeVersions(input, ...args);
};
export async function* paginateListRecipeVersions(
  config: DataBrewPaginationConfiguration,
  input: ListRecipeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecipeVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecipeVersionsCommandOutput;
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
