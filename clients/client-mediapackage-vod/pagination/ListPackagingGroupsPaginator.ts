import { MediaPackageVod } from "../MediaPackageVod";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import {
  ListPackagingGroupsCommand,
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
} from "../commands/ListPackagingGroupsCommand";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaPackageVodClient,
  input: ListPackagingGroupsCommandInput,
  ...args: any
): Promise<ListPackagingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagingGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaPackageVod,
  input: ListPackagingGroupsCommandInput,
  ...args: any
): Promise<ListPackagingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listPackagingGroups(input, ...args);
};
export async function* listPackagingGroupsPaginate(
  config: MediaPackageVodPaginationConfiguration,
  input: ListPackagingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagingGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
