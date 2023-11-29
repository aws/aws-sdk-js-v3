// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListTrainingDatasetsCommand,
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "../commands/ListTrainingDatasetsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsMLClient,
  input: ListTrainingDatasetsCommandInput,
  ...args: any
): Promise<ListTrainingDatasetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrainingDatasetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTrainingDatasets(
  config: CleanRoomsMLPaginationConfiguration,
  input: ListTrainingDatasetsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrainingDatasetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrainingDatasetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CleanRoomsMLClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CleanRoomsML | CleanRoomsMLClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
