// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetFreeTierUsageCommand,
  GetFreeTierUsageCommandInput,
  GetFreeTierUsageCommandOutput,
} from "../commands/GetFreeTierUsageCommand";
import { FreeTierClient } from "../FreeTierClient";
import { FreeTierPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FreeTierClient,
  input: GetFreeTierUsageCommandInput,
  ...args: any
): Promise<GetFreeTierUsageCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFreeTierUsageCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetFreeTierUsage(
  config: FreeTierPaginationConfiguration,
  input: GetFreeTierUsageCommandInput,
  ...additionalArguments: any
): Paginator<GetFreeTierUsageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFreeTierUsageCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FreeTierClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FreeTier | FreeTierClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
