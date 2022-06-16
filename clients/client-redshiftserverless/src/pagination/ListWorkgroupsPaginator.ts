// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkgroupsCommand,
  ListWorkgroupsCommandInput,
  ListWorkgroupsCommandOutput,
} from "../commands/ListWorkgroupsCommand";
import { RedshiftServerless } from "../RedshiftServerless";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListWorkgroupsCommandInput,
  ...args: any
): Promise<ListWorkgroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkgroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftServerless,
  input: ListWorkgroupsCommandInput,
  ...args: any
): Promise<ListWorkgroupsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkgroups(input, ...args);
};
export async function* paginateListWorkgroups(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListWorkgroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkgroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkgroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RedshiftServerless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftServerless | RedshiftServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
