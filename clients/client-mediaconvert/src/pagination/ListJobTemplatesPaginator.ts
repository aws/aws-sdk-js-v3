// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand";
import { MediaConvert } from "../MediaConvert";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaConvert,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listJobTemplates(input, ...args);
};
export async function* paginateListJobTemplates(
  config: MediaConvertPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListJobTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobTemplatesCommandOutput;
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
