import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import {
  ListAnomaliesForInsightCommand,
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "../commands/ListAnomaliesForInsightCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: ListAnomaliesForInsightCommandInput,
  ...args: any
): Promise<ListAnomaliesForInsightCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomaliesForInsightCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: ListAnomaliesForInsightCommandInput,
  ...args: any
): Promise<ListAnomaliesForInsightCommandOutput> => {
  // @ts-ignore
  return await client.listAnomaliesForInsight(input, ...args);
};
export async function* paginateListAnomaliesForInsight(
  config: DevOpsGuruPaginationConfiguration,
  input: ListAnomaliesForInsightCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomaliesForInsightCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomaliesForInsightCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
