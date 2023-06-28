// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListStepsCommandInput,
  ...args: any
): Promise<ListStepsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStepsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSteps(
  config: EMRPaginationConfiguration,
  input: ListStepsCommandInput,
  ...additionalArguments: any
): Paginator<ListStepsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStepsCommandOutput;
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
