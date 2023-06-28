// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  PreviewAgentsCommand,
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
} from "../commands/PreviewAgentsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: PreviewAgentsCommandInput,
  ...args: any
): Promise<PreviewAgentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new PreviewAgentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginatePreviewAgents(
  config: InspectorPaginationConfiguration,
  input: PreviewAgentsCommandInput,
  ...additionalArguments: any
): Paginator<PreviewAgentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: PreviewAgentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof InspectorClient) {
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
