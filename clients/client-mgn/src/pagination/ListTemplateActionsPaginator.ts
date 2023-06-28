// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTemplateActionsCommand,
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "../commands/ListTemplateActionsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof MgnClient) {
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
