// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { LookoutVision } from "../LookoutVision";
import { LookoutVisionClient } from "../LookoutVisionClient";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutVisionClient,
  input: ListModelsCommandInput,
  ...args: any
): Promise<ListModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutVision,
  input: ListModelsCommandInput,
  ...args: any
): Promise<ListModelsCommandOutput> => {
  // @ts-ignore
  return await client.listModels(input, ...args);
};
export async function* paginateListModels(
  config: LookoutVisionPaginationConfiguration,
  input: ListModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutVision) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LookoutVisionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutVision | LookoutVisionClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
