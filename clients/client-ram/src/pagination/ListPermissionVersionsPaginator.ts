// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPermissionVersionsCommand,
  ListPermissionVersionsCommandInput,
  ListPermissionVersionsCommandOutput,
} from "../commands/ListPermissionVersionsCommand";
import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPermissionVersionsCommandInput,
  ...args: any
): Promise<ListPermissionVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RAM,
  input: ListPermissionVersionsCommandInput,
  ...args: any
): Promise<ListPermissionVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionVersions(input, ...args);
};
export async function* paginateListPermissionVersions(
  config: RAMPaginationConfiguration,
  input: ListPermissionVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
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
