import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import {
  GetCanaryRunsCommand,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
} from "../commands/GetCanaryRunsCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: GetCanaryRunsCommandInput,
  ...args: any
): Promise<GetCanaryRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCanaryRunsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Synthetics,
  input: GetCanaryRunsCommandInput,
  ...args: any
): Promise<GetCanaryRunsCommandOutput> => {
  // @ts-ignore
  return await client.getCanaryRuns(input, ...args);
};
export async function* getCanaryRunsPaginate(
  config: SyntheticsPaginationConfiguration,
  input: GetCanaryRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetCanaryRunsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
