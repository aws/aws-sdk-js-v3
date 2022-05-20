// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListEnvironmentsCommandInput,
  ...args: any
): Promise<ListEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnvironmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListEnvironmentsCommandInput,
  ...args: any
): Promise<ListEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.listEnvironments(input, ...args);
};
export async function* paginateListEnvironments(
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Proton) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
