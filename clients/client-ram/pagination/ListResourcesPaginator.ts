import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RAMClient,
  input: ListResourcesCommandInput,
  ...args: any
): Promise<ListResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RAM,
  input: ListResourcesCommandInput,
  ...args: any
): Promise<ListResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listResources(input, ...args);
};
export async function* listResourcesPaginate(
  config: RAMPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
