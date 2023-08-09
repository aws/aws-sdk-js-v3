// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListResponsePlansCommand,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
} from "../commands/ListResponsePlansCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMIncidentsClient,
  input: ListResponsePlansCommandInput,
  ...args: any
): Promise<ListResponsePlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResponsePlansCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListResponsePlans(
  config: SSMIncidentsPaginationConfiguration,
  input: ListResponsePlansCommandInput,
  ...additionalArguments: any
): Paginator<ListResponsePlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResponsePlansCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSMIncidentsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMIncidents | SSMIncidentsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
