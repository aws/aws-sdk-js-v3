// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetMetricDataV2Command,
  GetMetricDataV2CommandInput,
  GetMetricDataV2CommandOutput,
} from "../commands/GetMetricDataV2Command";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: GetMetricDataV2CommandInput,
  ...args: any
): Promise<GetMetricDataV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMetricDataV2Command(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetMetricDataV2(
  config: ConnectPaginationConfiguration,
  input: GetMetricDataV2CommandInput,
  ...additionalArguments: any
): Paginator<GetMetricDataV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMetricDataV2CommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
