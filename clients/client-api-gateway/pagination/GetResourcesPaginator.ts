import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "../commands/GetResourcesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetResourcesCommandInput,
  ...args: any
): Promise<GetResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetResourcesCommandInput,
  ...args: any
): Promise<GetResourcesCommandOutput> => {
  // @ts-ignore
  return await client.getResources(input, ...args);
};
export async function* getResourcesPaginate(
  config: APIGatewayPaginationConfiguration,
  input: GetResourcesCommandInput,
  ...additionalArguments: any
): Paginator<GetResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourcesCommandOutput;
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
