// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFront } from "../CloudFront";
import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFrontClient,
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  ...args: any
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCloudFrontOriginAccessIdentitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFront,
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  ...args: any
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.listCloudFrontOriginAccessIdentities(input, ...args);
};
export async function* paginateListCloudFrontOriginAccessIdentities(
  config: CloudFrontPaginationConfiguration,
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListCloudFrontOriginAccessIdentitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCloudFrontOriginAccessIdentitiesCommandOutput;
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
    token = page.CloudFrontOriginAccessIdentityList!.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
