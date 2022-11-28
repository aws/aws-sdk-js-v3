// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTemplateActionsCommand,
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "../commands/ListTemplateActionsCommand";
import { Mgn } from "../Mgn";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: ListTemplateActionsCommandInput,
  ...args: any
): Promise<ListTemplateActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Mgn,
  input: ListTemplateActionsCommandInput,
  ...args: any
): Promise<ListTemplateActionsCommandOutput> => {
  // @ts-ignore
  return await client.listTemplateActions(input, ...args);
};
export async function* paginateListTemplateActions(
  config: MgnPaginationConfiguration,
  input: ListTemplateActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplateActionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Mgn) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
