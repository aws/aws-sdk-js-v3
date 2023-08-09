// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetUsagePlanKeysCommand,
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
} from "../commands/GetUsagePlanKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetUsagePlanKeysCommandInput,
  ...args: any
): Promise<GetUsagePlanKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsagePlanKeysCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetUsagePlanKeys(
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlanKeysCommandInput,
  ...additionalArguments: any
): Paginator<GetUsagePlanKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.position
  let token: typeof input.position | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUsagePlanKeysCommandOutput;
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
