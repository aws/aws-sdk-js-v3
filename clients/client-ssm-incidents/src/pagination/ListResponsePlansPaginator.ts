// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResponsePlansCommand,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
} from "../commands/ListResponsePlansCommand";
import { SSMIncidents } from "../SSMIncidents";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: SSMIncidents,
  input: ListResponsePlansCommandInput,
  ...args: any
): Promise<ListResponsePlansCommandOutput> => {
  // @ts-ignore
  return await client.listResponsePlans(input, ...args);
};
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
    if (config.client instanceof SSMIncidents) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMIncidentsClient) {
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
