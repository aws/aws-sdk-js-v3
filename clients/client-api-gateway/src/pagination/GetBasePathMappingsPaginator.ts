// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetBasePathMappingsCommand,
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "../commands/GetBasePathMappingsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetBasePathMappingsCommandInput,
  ...args: any
): Promise<GetBasePathMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBasePathMappingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetBasePathMappings(
  config: APIGatewayPaginationConfiguration,
  input: GetBasePathMappingsCommandInput,
  ...additionalArguments: any
): Paginator<GetBasePathMappingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.position
  let token: typeof input.position | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBasePathMappingsCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGatewayClient) {
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
