// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetEnabledStandardsCommand,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetEnabledStandardsCommandInput,
  ...args: any
): Promise<GetEnabledStandardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEnabledStandardsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetEnabledStandards(
  config: SecurityHubPaginationConfiguration,
  input: GetEnabledStandardsCommandInput,
  ...additionalArguments: any
): Paginator<GetEnabledStandardsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEnabledStandardsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHubClient) {
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
