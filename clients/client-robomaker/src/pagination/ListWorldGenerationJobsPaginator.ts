// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorldGenerationJobsCommand,
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "../commands/ListWorldGenerationJobsCommand";
import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldGenerationJobsCommandInput,
  ...args: any
): Promise<ListWorldGenerationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldGenerationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldGenerationJobsCommandInput,
  ...args: any
): Promise<ListWorldGenerationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listWorldGenerationJobs(input, ...args);
};
export async function* paginateListWorldGenerationJobs(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldGenerationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldGenerationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldGenerationJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
