// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListSipMediaApplicationsCommandInput,
  ...args: any
): Promise<ListSipMediaApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSipMediaApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListSipMediaApplicationsCommandInput,
  ...args: any
): Promise<ListSipMediaApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listSipMediaApplications(input, ...args);
};
export async function* paginateListSipMediaApplications(
  config: ChimePaginationConfiguration,
  input: ListSipMediaApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSipMediaApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSipMediaApplicationsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
