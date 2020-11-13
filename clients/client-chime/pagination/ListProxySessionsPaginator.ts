import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListProxySessionsCommand,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
} from "../commands/ListProxySessionsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListProxySessionsCommandInput,
  ...args: any
): Promise<ListProxySessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProxySessionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Chime,
  input: ListProxySessionsCommandInput,
  ...args: any
): Promise<ListProxySessionsCommandOutput> => {
  // @ts-ignore
  return await client.listProxySessions(input, ...args);
};
export async function* listProxySessionsPaginate(
  config: ChimePaginationConfiguration,
  input: ListProxySessionsCommandInput,
  ...additionalArguments: any
): Paginator<ListProxySessionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProxySessionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
