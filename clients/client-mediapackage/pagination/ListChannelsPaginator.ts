import { MediaPackage } from "../MediaPackage";
import { MediaPackageClient } from "../MediaPackageClient";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { MediaPackagePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaPackageClient,
  input: ListChannelsCommandInput,
  ...args: any
): Promise<ListChannelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaPackage,
  input: ListChannelsCommandInput,
  ...args: any
): Promise<ListChannelsCommandOutput> => {
  // @ts-ignore
  return await client.listChannels(input, ...args);
};
export async function* listChannelsPaginate(
  config: MediaPackagePaginationConfiguration,
  input: ListChannelsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackage) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaPackageClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackage | MediaPackageClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
