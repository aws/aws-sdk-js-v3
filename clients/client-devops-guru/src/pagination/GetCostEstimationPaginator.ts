// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetCostEstimationCommand,
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput,
} from "../commands/GetCostEstimationCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: GetCostEstimationCommandInput,
  ...args: any
): Promise<GetCostEstimationCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCostEstimationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetCostEstimation(
  config: DevOpsGuruPaginationConfiguration,
  input: GetCostEstimationCommandInput,
  ...additionalArguments: any
): Paginator<GetCostEstimationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCostEstimationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
