// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeGuruProfiler } from "../CodeGuruProfiler";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  ListProfileTimesCommand,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput,
} from "../commands/ListProfileTimesCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeGuruProfilerClient,
  input: ListProfileTimesCommandInput,
  ...args: any
): Promise<ListProfileTimesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProfileTimesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeGuruProfiler,
  input: ListProfileTimesCommandInput,
  ...args: any
): Promise<ListProfileTimesCommandOutput> => {
  // @ts-ignore
  return await client.listProfileTimes(input, ...args);
};
export async function* paginateListProfileTimes(
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListProfileTimesCommandInput,
  ...additionalArguments: any
): Paginator<ListProfileTimesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProfileTimesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruProfiler) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruProfiler | CodeGuruProfilerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
