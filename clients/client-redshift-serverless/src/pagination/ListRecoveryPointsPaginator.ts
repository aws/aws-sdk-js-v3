// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRecoveryPointsCommand,
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput,
} from "../commands/ListRecoveryPointsCommand";
import { RedshiftServerless } from "../RedshiftServerless";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListRecoveryPointsCommandInput,
  ...args: any
): Promise<ListRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecoveryPointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftServerless,
  input: ListRecoveryPointsCommandInput,
  ...args: any
): Promise<ListRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.listRecoveryPoints(input, ...args);
};
export async function* paginateListRecoveryPoints(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListRecoveryPointsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecoveryPointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecoveryPointsCommandOutput;
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
