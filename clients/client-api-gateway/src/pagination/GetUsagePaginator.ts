// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetUsageCommand, GetUsageCommandInput, GetUsageCommandOutput } from "../commands/GetUsageCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetUsageCommandInput,
  ...args: any
): Promise<GetUsageCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsageCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: APIGateway,
  input: GetUsageCommandInput,
  ...args: any
): Promise<GetUsageCommandOutput> => {
  // @ts-ignore
  return await client.getUsage(input, ...args);
};
export async function* paginateGetUsage(
  config: APIGatewayPaginationConfiguration,
  input: GetUsageCommandInput,
  ...additionalArguments: any
): Paginator<GetUsageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.position
  let token: typeof input.position | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.position;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
