import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  GetAccountAuthorizationDetailsCommand,
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "../commands/GetAccountAuthorizationDetailsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...args: any
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAccountAuthorizationDetailsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...args: any
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  // @ts-ignore
  return await client.getAccountAuthorizationDetails(input, ...args);
};
export async function* paginateGetAccountAuthorizationDetails(
  config: IAMPaginationConfiguration,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...additionalArguments: any
): Paginator<GetAccountAuthorizationDetailsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAccountAuthorizationDetailsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
