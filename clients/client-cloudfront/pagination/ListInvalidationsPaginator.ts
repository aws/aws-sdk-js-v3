import { CloudFront } from "../CloudFront";
import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListInvalidationsCommand,
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
} from "../commands/ListInvalidationsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFrontClient,
  input: ListInvalidationsCommandInput,
  ...args: any
): Promise<ListInvalidationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInvalidationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFront,
  input: ListInvalidationsCommandInput,
  ...args: any
): Promise<ListInvalidationsCommandOutput> => {
  // @ts-ignore
  return await client.listInvalidations(input, ...args);
};
export async function* paginateListInvalidations(
  config: CloudFrontPaginationConfiguration,
  input: ListInvalidationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInvalidationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInvalidationsCommandOutput;
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
    token = page.InvalidationList!.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
