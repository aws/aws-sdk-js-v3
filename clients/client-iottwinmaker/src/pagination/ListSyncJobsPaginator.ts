// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSyncJobsCommand,
  ListSyncJobsCommandInput,
  ListSyncJobsCommandOutput,
} from "../commands/ListSyncJobsCommand";
import { IoTTwinMaker } from "../IoTTwinMaker";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: ListSyncJobsCommandInput,
  ...args: any
): Promise<ListSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSyncJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTTwinMaker,
  input: ListSyncJobsCommandInput,
  ...args: any
): Promise<ListSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.listSyncJobs(input, ...args);
};
export async function* paginateListSyncJobs(
  config: IoTTwinMakerPaginationConfiguration,
  input: ListSyncJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListSyncJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSyncJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTTwinMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTTwinMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTTwinMaker | IoTTwinMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
