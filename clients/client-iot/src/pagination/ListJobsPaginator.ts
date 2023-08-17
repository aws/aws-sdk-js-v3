// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListJobsCommandInput,
  ...args: any
): Promise<ListJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListJobs(
  config: IoTPaginationConfiguration,
  input: ListJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
