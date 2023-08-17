// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListActivityTypesCommand,
  ListActivityTypesCommandInput,
  ListActivityTypesCommandOutput,
} from "../commands/ListActivityTypesCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
