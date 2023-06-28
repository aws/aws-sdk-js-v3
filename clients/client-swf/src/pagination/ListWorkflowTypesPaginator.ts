// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkflowTypesCommand,
  ListWorkflowTypesCommandInput,
  ListWorkflowTypesCommandOutput,
} from "../commands/ListWorkflowTypesCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SWFClient,
  input: ListWorkflowTypesCommandInput,
  ...args: any
): Promise<ListWorkflowTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkflowTypes(
  config: SWFPaginationConfiguration,
  input: ListWorkflowTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextPageToken
  let token: typeof input.nextPageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowTypesCommandOutput;
  while (hasNext) {
    input.nextPageToken = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
