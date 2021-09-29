import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import {
  ListInstanceGroupsCommand,
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
} from "../commands/ListInstanceGroupsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListInstanceGroupsCommandInput,
  ...args: any
): Promise<ListInstanceGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListInstanceGroupsCommandInput,
  ...args: any
): Promise<ListInstanceGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceGroups(input, ...args);
};
export async function* paginateListInstanceGroups(
  config: EMRPaginationConfiguration,
  input: ListInstanceGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceGroupsCommandOutput;
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
