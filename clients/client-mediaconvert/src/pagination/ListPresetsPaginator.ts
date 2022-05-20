// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { MediaConvert } from "../MediaConvert";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: ListPresetsCommandInput,
  ...args: any
): Promise<ListPresetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPresetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaConvert,
  input: ListPresetsCommandInput,
  ...args: any
): Promise<ListPresetsCommandOutput> => {
  // @ts-ignore
  return await client.listPresets(input, ...args);
};
export async function* paginateListPresets(
  config: MediaConvertPaginationConfiguration,
  input: ListPresetsCommandInput,
  ...additionalArguments: any
): Paginator<ListPresetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPresetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConvert) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConvertClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
