// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListApplicationInstanceNodeInstancesCommand,
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
} from "../commands/ListApplicationInstanceNodeInstancesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListApplicationInstanceNodeInstancesCommandInput,
  ...args: any
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationInstanceNodeInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationInstanceNodeInstances(
  config: PanoramaPaginationConfiguration,
  input: ListApplicationInstanceNodeInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationInstanceNodeInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationInstanceNodeInstancesCommandOutput;
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
