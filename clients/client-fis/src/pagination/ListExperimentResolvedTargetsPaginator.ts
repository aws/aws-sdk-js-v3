// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListExperimentResolvedTargetsCommand,
  ListExperimentResolvedTargetsCommandInput,
  ListExperimentResolvedTargetsCommandOutput,
} from "../commands/ListExperimentResolvedTargetsCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListExperimentResolvedTargetsCommandInput,
  ...args: any
): Promise<ListExperimentResolvedTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExperimentResolvedTargetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListExperimentResolvedTargets(
  config: FisPaginationConfiguration,
  input: ListExperimentResolvedTargetsCommandInput,
  ...additionalArguments: any
): Paginator<ListExperimentResolvedTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExperimentResolvedTargetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Fis | FisClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
