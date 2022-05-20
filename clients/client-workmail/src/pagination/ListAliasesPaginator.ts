// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAliasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkMail,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listAliases(input, ...args);
};
export async function* paginateListAliases(
  config: WorkMailPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAliasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAliasesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
