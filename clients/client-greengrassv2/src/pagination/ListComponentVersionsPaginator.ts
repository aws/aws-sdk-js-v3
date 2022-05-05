// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListComponentVersionsCommand,
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "../commands/ListComponentVersionsCommand";
import { GreengrassV2 } from "../GreengrassV2";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GreengrassV2Client,
  input: ListComponentVersionsCommandInput,
  ...args: any
): Promise<ListComponentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComponentVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GreengrassV2,
  input: ListComponentVersionsCommandInput,
  ...args: any
): Promise<ListComponentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listComponentVersions(input, ...args);
};
export async function* paginateListComponentVersions(
  config: GreengrassV2PaginationConfiguration,
  input: ListComponentVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListComponentVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComponentVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GreengrassV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GreengrassV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GreengrassV2 | GreengrassV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
