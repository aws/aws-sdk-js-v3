// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSimulationsCommand,
  ListSimulationsCommandInput,
  ListSimulationsCommandOutput,
} from "../commands/ListSimulationsCommand";
import { SimSpaceWeaver } from "../SimSpaceWeaver";
import { SimSpaceWeaverClient } from "../SimSpaceWeaverClient";
import { SimSpaceWeaverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SimSpaceWeaverClient,
  input: ListSimulationsCommandInput,
  ...args: any
): Promise<ListSimulationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SimSpaceWeaver,
  input: ListSimulationsCommandInput,
  ...args: any
): Promise<ListSimulationsCommandOutput> => {
  // @ts-ignore
  return await client.listSimulations(input, ...args);
};
export async function* paginateListSimulations(
  config: SimSpaceWeaverPaginationConfiguration,
  input: ListSimulationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSimulationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SimSpaceWeaver) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SimSpaceWeaverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SimSpaceWeaver | SimSpaceWeaverClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
