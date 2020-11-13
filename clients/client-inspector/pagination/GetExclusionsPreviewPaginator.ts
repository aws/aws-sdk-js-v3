import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  GetExclusionsPreviewCommand,
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "../commands/GetExclusionsPreviewCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: InspectorClient,
  input: GetExclusionsPreviewCommandInput,
  ...args: any
): Promise<GetExclusionsPreviewCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetExclusionsPreviewCommand(input), ...args);
};
const makePagedRequest = async (
  client: Inspector,
  input: GetExclusionsPreviewCommandInput,
  ...args: any
): Promise<GetExclusionsPreviewCommandOutput> => {
  // @ts-ignore
  return await client.getExclusionsPreview(input, ...args);
};
export async function* getExclusionsPreviewPaginate(
  config: InspectorPaginationConfiguration,
  input: GetExclusionsPreviewCommandInput,
  ...additionalArguments: any
): Paginator<GetExclusionsPreviewCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
