// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetConsolidatedReportCommand,
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
} from "../commands/GetConsolidatedReportCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: GetConsolidatedReportCommandInput,
  ...args: any
): Promise<GetConsolidatedReportCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConsolidatedReportCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetConsolidatedReport(
  config: WellArchitectedPaginationConfiguration,
  input: GetConsolidatedReportCommandInput,
  ...additionalArguments: any
): Paginator<GetConsolidatedReportCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConsolidatedReportCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
