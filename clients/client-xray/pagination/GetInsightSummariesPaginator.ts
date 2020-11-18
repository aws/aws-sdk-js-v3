import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import {
  GetInsightSummariesCommand,
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "../commands/GetInsightSummariesCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: XRayClient,
  input: GetInsightSummariesCommandInput,
  ...args: any
): Promise<GetInsightSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInsightSummariesCommand(input), ...args);
};
const makePagedRequest = async (
  client: XRay,
  input: GetInsightSummariesCommandInput,
  ...args: any
): Promise<GetInsightSummariesCommandOutput> => {
  // @ts-ignore
  return await client.getInsightSummaries(input, ...args);
};
export async function* paginateGetInsightSummaries(
  config: XRayPaginationConfiguration,
  input: GetInsightSummariesCommandInput,
  ...additionalArguments: any
): Paginator<GetInsightSummariesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInsightSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
