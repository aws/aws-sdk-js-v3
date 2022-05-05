// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListImageBuildVersionsCommand,
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "../commands/ListImageBuildVersionsCommand";
import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImageBuildVersionsCommandInput,
  ...args: any
): Promise<ListImageBuildVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImageBuildVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImageBuildVersionsCommandInput,
  ...args: any
): Promise<ListImageBuildVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listImageBuildVersions(input, ...args);
};
export async function* paginateListImageBuildVersions(
  config: ImagebuilderPaginationConfiguration,
  input: ListImageBuildVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListImageBuildVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImageBuildVersionsCommandOutput;
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
