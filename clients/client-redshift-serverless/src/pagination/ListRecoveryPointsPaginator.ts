// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRecoveryPointsCommand,
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput,
} from "../commands/ListRecoveryPointsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof RedshiftServerlessClient) {
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
