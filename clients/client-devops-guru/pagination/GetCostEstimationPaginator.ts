import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import {
  GetCostEstimationCommand,
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput,
} from "../commands/GetCostEstimationCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: GetCostEstimationCommandInput,
  ...args: any
): Promise<GetCostEstimationCommandOutput> => {
  // @ts-ignore
  return await client.getCostEstimation(input, ...args);
};
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
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
