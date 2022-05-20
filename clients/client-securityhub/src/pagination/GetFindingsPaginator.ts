// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetFindingsCommandInput,
  ...args: any
): Promise<GetFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFindingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: GetFindingsCommandInput,
  ...args: any
): Promise<GetFindingsCommandOutput> => {
  // @ts-ignore
  return await client.getFindings(input, ...args);
};
export async function* paginateGetFindings(
  config: SecurityHubPaginationConfiguration,
  input: GetFindingsCommandInput,
  ...additionalArguments: any
): Paginator<GetFindingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFindingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
