// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetUsagePlansCommand,
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
} from "../commands/GetUsagePlansCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetUsagePlansCommandInput,
  ...args: any
): Promise<GetUsagePlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsagePlansCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetUsagePlans(
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlansCommandInput,
  ...additionalArguments: any
): Paginator<GetUsagePlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.position
  let token: typeof input.position | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUsagePlansCommandOutput;
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
