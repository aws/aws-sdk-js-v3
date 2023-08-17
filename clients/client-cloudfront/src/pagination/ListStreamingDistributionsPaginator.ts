// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListStreamingDistributionsCommand,
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "../commands/ListStreamingDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFrontClient,
  input: ListStreamingDistributionsCommandInput,
  ...args: any
): Promise<ListStreamingDistributionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamingDistributionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStreamingDistributions(
  config: CloudFrontPaginationConfiguration,
  input: ListStreamingDistributionsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamingDistributionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamingDistributionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof CloudFrontClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFront | CloudFrontClient");
    }
    yield page;
    const prevToken = token;
    token = page.StreamingDistributionList!.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
