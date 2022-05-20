// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPackagingGroupsCommand,
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
} from "../commands/ListPackagingGroupsCommand";
import { MediaPackageVod } from "../MediaPackageVod";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaPackageVodClient,
  input: ListPackagingGroupsCommandInput,
  ...args: any
): Promise<ListPackagingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagingGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaPackageVod,
  input: ListPackagingGroupsCommandInput,
  ...args: any
): Promise<ListPackagingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listPackagingGroups(input, ...args);
};
export async function* paginateListPackagingGroups(
  config: MediaPackageVodPaginationConfiguration,
  input: ListPackagingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagingGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackagingGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackageVod) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaPackageVodClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackageVod | MediaPackageVodClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
