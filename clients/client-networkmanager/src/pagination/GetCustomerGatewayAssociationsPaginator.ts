// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetCustomerGatewayAssociationsCommand,
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
} from "../commands/GetCustomerGatewayAssociationsCommand";
import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...args: any
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCustomerGatewayAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkManager,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...args: any
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getCustomerGatewayAssociations(input, ...args);
};
export async function* paginateGetCustomerGatewayAssociations(
  config: NetworkManagerPaginationConfiguration,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetCustomerGatewayAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCustomerGatewayAssociationsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
