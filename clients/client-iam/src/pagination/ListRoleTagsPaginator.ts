// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRoleTagsCommand,
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
} from "../commands/ListRoleTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListRoleTagsCommandInput,
  ...args: any
): Promise<ListRoleTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoleTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRoleTags(
  config: IAMPaginationConfiguration,
  input: ListRoleTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListRoleTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoleTagsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
