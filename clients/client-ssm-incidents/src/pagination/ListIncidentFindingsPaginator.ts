// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIncidentFindingsCommand,
  ListIncidentFindingsCommandInput,
  ListIncidentFindingsCommandOutput,
} from "../commands/ListIncidentFindingsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMIncidentsClient,
  input: ListIncidentFindingsCommandInput,
  ...args: any
): Promise<ListIncidentFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIncidentFindingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIncidentFindings(
  config: SSMIncidentsPaginationConfiguration,
  input: ListIncidentFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListIncidentFindingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIncidentFindingsCommandOutput;
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
