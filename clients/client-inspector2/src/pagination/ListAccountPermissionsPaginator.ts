// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccountPermissionsCommand,
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "../commands/ListAccountPermissionsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: ListAccountPermissionsCommandInput,
  ...args: any
): Promise<ListAccountPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountPermissionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccountPermissions(
  config: Inspector2PaginationConfiguration,
  input: ListAccountPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountPermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountPermissionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector2 | Inspector2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
