// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIncidentRecordsCommand,
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
} from "../commands/ListIncidentRecordsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMIncidentsClient,
  input: ListIncidentRecordsCommandInput,
  ...args: any
): Promise<ListIncidentRecordsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIncidentRecordsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIncidentRecords(
  config: SSMIncidentsPaginationConfiguration,
  input: ListIncidentRecordsCommandInput,
  ...additionalArguments: any
): Paginator<ListIncidentRecordsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIncidentRecordsCommandOutput;
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
