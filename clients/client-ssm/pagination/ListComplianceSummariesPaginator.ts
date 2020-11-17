import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListComplianceSummariesCommand,
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "../commands/ListComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListComplianceSummariesCommandInput,
  ...args: any
): Promise<ListComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComplianceSummariesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: ListComplianceSummariesCommandInput,
  ...args: any
): Promise<ListComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listComplianceSummaries(input, ...args);
};
export async function* paginateListComplianceSummaries(
  config: SSMPaginationConfiguration,
  input: ListComplianceSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListComplianceSummariesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComplianceSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
