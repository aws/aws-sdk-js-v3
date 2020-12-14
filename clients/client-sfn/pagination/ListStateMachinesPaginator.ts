import { SFN } from "../SFN";
import { SFNClient } from "../SFNClient";
import {
  ListStateMachinesCommand,
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
} from "../commands/ListStateMachinesCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SFNClient,
  input: ListStateMachinesCommandInput,
  ...args: any
): Promise<ListStateMachinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStateMachinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SFN,
  input: ListStateMachinesCommandInput,
  ...args: any
): Promise<ListStateMachinesCommandOutput> => {
  // @ts-ignore
  return await client.listStateMachines(input, ...args);
};
export async function* paginateListStateMachines(
  config: SFNPaginationConfiguration,
  input: ListStateMachinesCommandInput,
  ...additionalArguments: any
): Paginator<ListStateMachinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStateMachinesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
