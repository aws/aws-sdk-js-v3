// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { MWAA } from "../MWAA";
import { MWAAClient } from "../MWAAClient";
import { MWAAPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MWAAClient,
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
  client: MWAA,
  input: ListEnvironmentsCommandInput,
  ...args: any
): Promise<ListEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.listEnvironments(input, ...args);
};
export async function* paginateListEnvironments(
  config: MWAAPaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MWAA) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MWAAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MWAA | MWAAClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
