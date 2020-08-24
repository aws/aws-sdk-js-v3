import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import {
  GetCustomerGatewayAssociationsCommand,
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
} from "../commands/GetCustomerGatewayAssociationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...args: any
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCustomerGatewayAssociationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...args: any
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getCustomerGatewayAssociations(input, ...args);
};
export async function* getCustomerGatewayAssociationsPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetCustomerGatewayAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetCustomerGatewayAssociationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
