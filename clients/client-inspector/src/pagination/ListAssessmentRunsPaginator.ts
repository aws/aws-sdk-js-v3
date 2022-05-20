// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssessmentRunsCommand,
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
} from "../commands/ListAssessmentRunsCommand";
import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListAssessmentRunsCommandInput,
  ...args: any
): Promise<ListAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListAssessmentRunsCommandInput,
  ...args: any
): Promise<ListAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentRuns(input, ...args);
};
export async function* paginateListAssessmentRuns(
  config: InspectorPaginationConfiguration,
  input: ListAssessmentRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentRunsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
