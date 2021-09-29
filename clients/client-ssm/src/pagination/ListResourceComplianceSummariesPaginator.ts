import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListResourceComplianceSummariesCommand,
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "../commands/ListResourceComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListResourceComplianceSummariesCommandInput,
  ...args: any
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceComplianceSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListResourceComplianceSummariesCommandInput,
  ...args: any
): Promise<ListResourceComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listResourceComplianceSummaries(input, ...args);
};
export async function* paginateListResourceComplianceSummaries(
  config: SSMPaginationConfiguration,
  input: ListResourceComplianceSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceComplianceSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceComplianceSummariesCommandOutput;
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
