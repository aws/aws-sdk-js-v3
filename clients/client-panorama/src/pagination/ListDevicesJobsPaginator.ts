// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDevicesJobsCommand,
  ListDevicesJobsCommandInput,
  ListDevicesJobsCommandOutput,
} from "../commands/ListDevicesJobsCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListDevicesJobsCommandInput,
  ...args: any
): Promise<ListDevicesJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevicesJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDevicesJobs(
  config: PanoramaPaginationConfiguration,
  input: ListDevicesJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicesJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevicesJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PanoramaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Panorama | PanoramaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
