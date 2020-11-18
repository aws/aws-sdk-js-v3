import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  PreviewAgentsCommand,
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
} from "../commands/PreviewAgentsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: InspectorClient,
  input: PreviewAgentsCommandInput,
  ...args: any
): Promise<PreviewAgentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new PreviewAgentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Inspector,
  input: PreviewAgentsCommandInput,
  ...args: any
): Promise<PreviewAgentsCommandOutput> => {
  // @ts-ignore
  return await client.previewAgents(input, ...args);
};
export async function* paginatePreviewAgents(
  config: InspectorPaginationConfiguration,
  input: PreviewAgentsCommandInput,
  ...additionalArguments: any
): Paginator<PreviewAgentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: PreviewAgentsCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
