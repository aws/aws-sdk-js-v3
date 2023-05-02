// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPermissionAssociationsCommand,
  ListPermissionAssociationsCommandInput,
  ListPermissionAssociationsCommandOutput,
} from "../commands/ListPermissionAssociationsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPermissionAssociationsCommandInput,
  ...args: any
): Promise<ListPermissionAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPermissionAssociations(
  config: RAMPaginationConfiguration,
  input: ListPermissionAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionAssociationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
