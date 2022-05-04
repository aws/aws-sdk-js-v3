// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetExclusionsPreviewCommand,
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "../commands/GetExclusionsPreviewCommand";
import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: GetExclusionsPreviewCommandInput,
  ...args: any
): Promise<GetExclusionsPreviewCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetExclusionsPreviewCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: GetExclusionsPreviewCommandInput,
  ...args: any
): Promise<GetExclusionsPreviewCommandOutput> => {
  // @ts-ignore
  return await client.getExclusionsPreview(input, ...args);
};
export async function* paginateGetExclusionsPreview(
  config: InspectorPaginationConfiguration,
  input: GetExclusionsPreviewCommandInput,
  ...additionalArguments: any
): Paginator<GetExclusionsPreviewCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetExclusionsPreviewCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
