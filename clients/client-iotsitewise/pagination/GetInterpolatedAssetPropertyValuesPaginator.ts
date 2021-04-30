import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import {
  GetInterpolatedAssetPropertyValuesCommand,
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "../commands/GetInterpolatedAssetPropertyValuesCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  ...args: any
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInterpolatedAssetPropertyValuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  ...args: any
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  // @ts-ignore
  return await client.getInterpolatedAssetPropertyValues(input, ...args);
};
export async function* paginateGetInterpolatedAssetPropertyValues(
  config: IoTSiteWisePaginationConfiguration,
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  ...additionalArguments: any
): Paginator<GetInterpolatedAssetPropertyValuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInterpolatedAssetPropertyValuesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
