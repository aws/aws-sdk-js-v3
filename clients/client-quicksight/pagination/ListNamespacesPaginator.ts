import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "../commands/ListNamespacesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListNamespacesCommandInput,
  ...args: any
): Promise<ListNamespacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNamespacesCommand(input), ...args);
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListNamespacesCommandInput,
  ...args: any
): Promise<ListNamespacesCommandOutput> => {
  // @ts-ignore
  return await client.listNamespaces(input, ...args);
};
export async function* listNamespacesPaginate(
  config: QuickSightPaginationConfiguration,
  input: ListNamespacesCommandInput,
  ...additionalArguments: any
): Paginator<ListNamespacesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNamespacesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
