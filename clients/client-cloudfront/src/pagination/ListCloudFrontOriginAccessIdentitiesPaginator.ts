// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof CloudFrontClient) {
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
