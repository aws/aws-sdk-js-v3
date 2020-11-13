import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetUsageCommand, GetUsageCommandInput, GetUsageCommandOutput } from "../commands/GetUsageCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetUsageCommandInput,
  ...args: any
): Promise<GetUsageCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsageCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetUsageCommandInput,
  ...args: any
): Promise<GetUsageCommandOutput> => {
  // @ts-ignore
  return await client.getUsage(input, ...args);
};
export async function* getUsagePaginate(
  config: APIGatewayPaginationConfiguration,
  input: GetUsageCommandInput,
  ...additionalArguments: any
): Paginator<GetUsageCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUsageCommandOutput;
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
