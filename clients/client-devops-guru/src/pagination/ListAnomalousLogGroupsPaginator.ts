// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAnomalousLogGroupsCommand,
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput,
} from "../commands/ListAnomalousLogGroupsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: ListAnomalousLogGroupsCommandInput,
  ...args: any
): Promise<ListAnomalousLogGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomalousLogGroupsCommand(input), ...args);
};
export async function* paginateListAnomalousLogGroups(
  config: DevOpsGuruPaginationConfiguration,
  input: ListAnomalousLogGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomalousLogGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomalousLogGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
