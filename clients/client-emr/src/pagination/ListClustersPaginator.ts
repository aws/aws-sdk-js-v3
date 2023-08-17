// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListClustersCommandInput,
  ...args: any
): Promise<ListClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClustersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClusters(
  config: EMRPaginationConfiguration,
  input: ListClustersCommandInput,
  ...additionalArguments: any
): Paginator<ListClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClustersCommandOutput;
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
