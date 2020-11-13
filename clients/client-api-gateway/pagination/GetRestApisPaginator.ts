import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetRestApisCommandInput,
  ...args: any
): Promise<GetRestApisCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetRestApisCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetRestApisCommandInput,
  ...args: any
): Promise<GetRestApisCommandOutput> => {
  // @ts-ignore
  return await client.getRestApis(input, ...args);
};
export async function* getRestApisPaginate(
  config: APIGatewayPaginationConfiguration,
  input: GetRestApisCommandInput,
  ...additionalArguments: any
): Paginator<GetRestApisCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetRestApisCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    token = page.position;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
