// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRulesetsCommand,
  ListRulesetsCommandInput,
  ListRulesetsCommandOutput,
} from "../commands/ListRulesetsCommand";
import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListRulesetsCommandInput,
  ...args: any
): Promise<ListRulesetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRulesetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataBrew,
  input: ListRulesetsCommandInput,
  ...args: any
): Promise<ListRulesetsCommandOutput> => {
  // @ts-ignore
  return await client.listRulesets(input, ...args);
};
export async function* paginateListRulesets(
  config: DataBrewPaginationConfiguration,
  input: ListRulesetsCommandInput,
  ...additionalArguments: any
): Paginator<ListRulesetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRulesetsCommandOutput;
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
