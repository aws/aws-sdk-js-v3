import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListComplianceItemsCommand,
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "../commands/ListComplianceItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListComplianceItemsCommandInput,
  ...args: any
): Promise<ListComplianceItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComplianceItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListComplianceItemsCommandInput,
  ...args: any
): Promise<ListComplianceItemsCommandOutput> => {
  // @ts-ignore
  return await client.listComplianceItems(input, ...args);
};
export async function* paginateListComplianceItems(
  config: SSMPaginationConfiguration,
  input: ListComplianceItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListComplianceItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComplianceItemsCommandOutput;
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
