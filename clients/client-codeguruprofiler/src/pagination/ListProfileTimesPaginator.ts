// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  ListProfileTimesCommand,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput,
} from "../commands/ListProfileTimesCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof CodeGuruProfilerClient) {
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
