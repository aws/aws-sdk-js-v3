// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetCanaryRunsCommand,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
} from "../commands/GetCanaryRunsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: GetCanaryRunsCommandInput,
  ...args: any
): Promise<GetCanaryRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCanaryRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetCanaryRuns(
  config: SyntheticsPaginationConfiguration,
  input: GetCanaryRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetCanaryRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCanaryRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
