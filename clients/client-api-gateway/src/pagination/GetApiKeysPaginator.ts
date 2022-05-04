// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetApiKeysCommand, GetApiKeysCommandInput, GetApiKeysCommandOutput } from "../commands/GetApiKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetApiKeysCommandInput,
  ...args: any
): Promise<GetApiKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetApiKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: APIGateway,
  input: GetApiKeysCommandInput,
  ...args: any
): Promise<GetApiKeysCommandOutput> => {
  // @ts-ignore
  return await client.getApiKeys(input, ...args);
};
export async function* paginateGetApiKeys(
  config: APIGatewayPaginationConfiguration,
  input: GetApiKeysCommandInput,
  ...additionalArguments: any
): Paginator<GetApiKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.position
  let token: typeof input.position | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetApiKeysCommandOutput;
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
