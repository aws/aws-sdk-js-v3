// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListInstanceProfilesCommandInput,
  ...args: any
): Promise<ListInstanceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListInstanceProfiles(
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceProfilesCommandOutput;
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
