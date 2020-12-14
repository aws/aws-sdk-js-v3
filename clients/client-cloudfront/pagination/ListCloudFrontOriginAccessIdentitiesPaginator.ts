import { CloudFront } from "../CloudFront";
import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.CloudFrontOriginAccessIdentityList!.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
