import { MediaPackage } from "../MediaPackage";
import { MediaPackageClient } from "../MediaPackageClient";
import {
  ListOriginEndpointsCommand,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import { MediaPackagePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaPackageClient,
  input: ListOriginEndpointsCommandInput,
  ...args: any
): Promise<ListOriginEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOriginEndpointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaPackage,
  input: ListOriginEndpointsCommandInput,
  ...args: any
): Promise<ListOriginEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listOriginEndpoints(input, ...args);
};
export async function* listOriginEndpointsPaginate(
  config: MediaPackagePaginationConfiguration,
  input: ListOriginEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListOriginEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOriginEndpointsCommandOutput;
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
