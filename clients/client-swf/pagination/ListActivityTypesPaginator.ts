import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  ListActivityTypesCommand,
  ListActivityTypesCommandInput,
  ListActivityTypesCommandOutput,
} from "../commands/ListActivityTypesCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SWFClient,
  input: ListActivityTypesCommandInput,
  ...args: any
): Promise<ListActivityTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActivityTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SWF,
  input: ListActivityTypesCommandInput,
  ...args: any
): Promise<ListActivityTypesCommandOutput> => {
  // @ts-ignore
  return await client.listActivityTypes(input, ...args);
};
export async function* paginateListActivityTypes(
  config: SWFPaginationConfiguration,
  input: ListActivityTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListActivityTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextPageToken
  let token: typeof input.nextPageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActivityTypesCommandOutput;
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
