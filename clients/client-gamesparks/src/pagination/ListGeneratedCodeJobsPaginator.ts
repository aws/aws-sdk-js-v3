// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGeneratedCodeJobsCommand,
  ListGeneratedCodeJobsCommandInput,
  ListGeneratedCodeJobsCommandOutput,
} from "../commands/ListGeneratedCodeJobsCommand";
import { GameSparksClient } from "../GameSparksClient";
import { GameSparksPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameSparksClient,
  input: ListGeneratedCodeJobsCommandInput,
  ...args: any
): Promise<ListGeneratedCodeJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGeneratedCodeJobsCommand(input), ...args);
};
export async function* paginateListGeneratedCodeJobs(
  config: GameSparksPaginationConfiguration,
  input: ListGeneratedCodeJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListGeneratedCodeJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGeneratedCodeJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GameSparksClient) {
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
