import { EKS } from "../EKS";
import { EKSClient } from "../EKSClient";
import { ListUpdatesCommand, ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { EKSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EKSClient,
  input: ListUpdatesCommandInput,
  ...args: any
): Promise<ListUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUpdatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: EKS,
  input: ListUpdatesCommandInput,
  ...args: any
): Promise<ListUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.listUpdates(input, ...args);
};
export async function* listUpdatesPaginate(
  config: EKSPaginationConfiguration,
  input: ListUpdatesCommandInput,
  ...additionalArguments: any
): Paginator<ListUpdatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUpdatesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
