// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListTemplateVersionsCommandInput,
  ...args: any
): Promise<ListTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListTemplateVersionsCommandInput,
  ...args: any
): Promise<ListTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listTemplateVersions(input, ...args);
};
export async function* paginateListTemplateVersions(
  config: QuickSightPaginationConfiguration,
  input: ListTemplateVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplateVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
