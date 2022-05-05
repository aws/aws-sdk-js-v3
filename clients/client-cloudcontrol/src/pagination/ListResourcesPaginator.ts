// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudControl } from "../CloudControl";
import { CloudControlClient } from "../CloudControlClient";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { CloudControlPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudControlClient,
  input: ListResourcesCommandInput,
  ...args: any
): Promise<ListResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudControl,
  input: ListResourcesCommandInput,
  ...args: any
): Promise<ListResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listResources(input, ...args);
};
export async function* paginateListResources(
  config: CloudControlPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudControl) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudControl | CloudControlClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
