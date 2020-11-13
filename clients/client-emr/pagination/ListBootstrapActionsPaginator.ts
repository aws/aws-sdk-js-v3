import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import {
  ListBootstrapActionsCommand,
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "../commands/ListBootstrapActionsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EMRClient,
  input: ListBootstrapActionsCommandInput,
  ...args: any
): Promise<ListBootstrapActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBootstrapActionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EMR,
  input: ListBootstrapActionsCommandInput,
  ...args: any
): Promise<ListBootstrapActionsCommandOutput> => {
  // @ts-ignore
  return await client.listBootstrapActions(input, ...args);
};
export async function* listBootstrapActionsPaginate(
  config: EMRPaginationConfiguration,
  input: ListBootstrapActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBootstrapActionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBootstrapActionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
