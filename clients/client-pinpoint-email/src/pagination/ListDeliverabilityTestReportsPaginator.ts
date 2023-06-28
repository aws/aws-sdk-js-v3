// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListDeliverabilityTestReportsCommandInput,
  ...args: any
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeliverabilityTestReportsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDeliverabilityTestReports(
  config: PinpointEmailPaginationConfiguration,
  input: ListDeliverabilityTestReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeliverabilityTestReportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeliverabilityTestReportsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
