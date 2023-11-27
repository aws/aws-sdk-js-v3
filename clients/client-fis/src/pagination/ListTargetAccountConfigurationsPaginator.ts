// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTargetAccountConfigurationsCommand,
  ListTargetAccountConfigurationsCommandInput,
  ListTargetAccountConfigurationsCommandOutput,
} from "../commands/ListTargetAccountConfigurationsCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListTargetAccountConfigurationsCommandInput,
  ...args: any
): Promise<ListTargetAccountConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetAccountConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTargetAccountConfigurations(
  config: FisPaginationConfiguration,
  input: ListTargetAccountConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetAccountConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetAccountConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Fis | FisClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
