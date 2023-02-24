// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTableRestoreStatusCommand,
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "../commands/ListTableRestoreStatusCommand";
import { RedshiftServerless } from "../RedshiftServerless";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListTableRestoreStatusCommandInput,
  ...args: any
): Promise<ListTableRestoreStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableRestoreStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftServerless,
  input: ListTableRestoreStatusCommandInput,
  ...args: any
): Promise<ListTableRestoreStatusCommandOutput> => {
  // @ts-ignore
  return await client.listTableRestoreStatus(input, ...args);
};
export async function* paginateListTableRestoreStatus(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListTableRestoreStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListTableRestoreStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableRestoreStatusCommandOutput;
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
