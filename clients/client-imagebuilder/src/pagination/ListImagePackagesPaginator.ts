// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListImagePackagesCommand,
  ListImagePackagesCommandInput,
  ListImagePackagesCommandOutput,
} from "../commands/ListImagePackagesCommand";
import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImagePackagesCommandInput,
  ...args: any
): Promise<ListImagePackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImagePackagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImagePackagesCommandInput,
  ...args: any
): Promise<ListImagePackagesCommandOutput> => {
  // @ts-ignore
  return await client.listImagePackages(input, ...args);
};
export async function* paginateListImagePackages(
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagePackagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagePackagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
