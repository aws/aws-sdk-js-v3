import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewaysCommand(input), ...args);
};
const makePagedRequest = async (
  client: StorageGateway,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listGateways(input, ...args);
};
export async function* listGatewaysPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewaysCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewaysCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
