import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import {
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "../commands/GetTransitGatewayRegistrationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...args: any
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTransitGatewayRegistrationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkManager,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...args: any
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.getTransitGatewayRegistrations(input, ...args);
};
export async function* paginateGetTransitGatewayRegistrations(
  config: NetworkManagerPaginationConfiguration,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...additionalArguments: any
): Paginator<GetTransitGatewayRegistrationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTransitGatewayRegistrationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
