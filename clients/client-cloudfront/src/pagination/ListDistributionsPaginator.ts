// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFront } from "../CloudFront";
import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionsCommand,
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput,
} from "../commands/ListDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFrontClient,
  input: ListDistributionsCommandInput,
  ...args: any
): Promise<ListDistributionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDistributionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFront,
  input: ListDistributionsCommandInput,
  ...args: any
): Promise<ListDistributionsCommandOutput> => {
  // @ts-ignore
  return await client.listDistributions(input, ...args);
};
export async function* paginateListDistributions(
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDistributionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDistributionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof CloudFront) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFrontClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFront | CloudFrontClient");
    }
    yield page;
    const prevToken = token;
    token = page.DistributionList!.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
