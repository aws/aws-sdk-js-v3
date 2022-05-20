// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListApplicationInstancesCommand,
  ListApplicationInstancesCommandInput,
  ListApplicationInstancesCommandOutput,
} from "../commands/ListApplicationInstancesCommand";
import { Panorama } from "../Panorama";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListApplicationInstancesCommandInput,
  ...args: any
): Promise<ListApplicationInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Panorama,
  input: ListApplicationInstancesCommandInput,
  ...args: any
): Promise<ListApplicationInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listApplicationInstances(input, ...args);
};
export async function* paginateListApplicationInstances(
  config: PanoramaPaginationConfiguration,
  input: ListApplicationInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Panorama) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PanoramaClient) {
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
