import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import {
  GetCanaryRunsCommand,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
} from "../commands/GetCanaryRunsCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Synthetics,
  input: GetCanaryRunsCommandInput,
  ...args: any
): Promise<GetCanaryRunsCommandOutput> => {
  // @ts-ignore
  return await client.getCanaryRuns(input, ...args);
};
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
    if (config.client instanceof Synthetics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
