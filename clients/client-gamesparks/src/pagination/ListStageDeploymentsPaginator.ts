// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListStageDeploymentsCommand,
  ListStageDeploymentsCommandInput,
  ListStageDeploymentsCommandOutput,
} from "../commands/ListStageDeploymentsCommand";
import { GameSparks } from "../GameSparks";
import { GameSparksClient } from "../GameSparksClient";
import { GameSparksPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameSparksClient,
  input: ListStageDeploymentsCommandInput,
  ...args: any
): Promise<ListStageDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStageDeploymentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameSparks,
  input: ListStageDeploymentsCommandInput,
  ...args: any
): Promise<ListStageDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.listStageDeployments(input, ...args);
};
export async function* paginateListStageDeployments(
  config: GameSparksPaginationConfiguration,
  input: ListStageDeploymentsCommandInput,
  ...additionalArguments: any
): Paginator<ListStageDeploymentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStageDeploymentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GameSparks) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameSparksClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameSparks | GameSparksClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
