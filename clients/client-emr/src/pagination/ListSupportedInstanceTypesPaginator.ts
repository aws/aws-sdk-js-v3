// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSupportedInstanceTypesCommand,
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput,
} from "../commands/ListSupportedInstanceTypesCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListSupportedInstanceTypesCommandInput,
  ...args: any
): Promise<ListSupportedInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSupportedInstanceTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSupportedInstanceTypes(
  config: EMRPaginationConfiguration,
  input: ListSupportedInstanceTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListSupportedInstanceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSupportedInstanceTypesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
