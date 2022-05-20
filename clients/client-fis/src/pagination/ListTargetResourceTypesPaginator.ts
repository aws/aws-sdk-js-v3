// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTargetResourceTypesCommand,
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput,
} from "../commands/ListTargetResourceTypesCommand";
import { Fis } from "../Fis";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListTargetResourceTypesCommandInput,
  ...args: any
): Promise<ListTargetResourceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetResourceTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Fis,
  input: ListTargetResourceTypesCommandInput,
  ...args: any
): Promise<ListTargetResourceTypesCommandOutput> => {
  // @ts-ignore
  return await client.listTargetResourceTypes(input, ...args);
};
export async function* paginateListTargetResourceTypes(
  config: FisPaginationConfiguration,
  input: ListTargetResourceTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetResourceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetResourceTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Fis) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FisClient) {
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
