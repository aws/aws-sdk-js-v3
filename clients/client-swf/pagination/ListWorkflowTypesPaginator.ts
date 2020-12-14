import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  ListWorkflowTypesCommand,
  ListWorkflowTypesCommandInput,
  ListWorkflowTypesCommandOutput,
} from "../commands/ListWorkflowTypesCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: SWF,
  input: ListWorkflowTypesCommandInput,
  ...args: any
): Promise<ListWorkflowTypesCommandOutput> => {
  // @ts-ignore
  return await client.listWorkflowTypes(input, ...args);
};
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
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page.nextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
