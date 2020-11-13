import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  ListExclusionsCommand,
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput,
} from "../commands/ListExclusionsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListExclusionsCommandInput,
  ...args: any
): Promise<ListExclusionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExclusionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Inspector,
  input: ListExclusionsCommandInput,
  ...args: any
): Promise<ListExclusionsCommandOutput> => {
  // @ts-ignore
  return await client.listExclusions(input, ...args);
};
export async function* listExclusionsPaginate(
  config: InspectorPaginationConfiguration,
  input: ListExclusionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExclusionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExclusionsCommandOutput;
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
