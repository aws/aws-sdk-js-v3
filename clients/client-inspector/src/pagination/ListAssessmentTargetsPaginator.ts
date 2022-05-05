// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssessmentTargetsCommand,
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "../commands/ListAssessmentTargetsCommand";
import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListAssessmentTargetsCommandInput,
  ...args: any
): Promise<ListAssessmentTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentTargetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListAssessmentTargetsCommandInput,
  ...args: any
): Promise<ListAssessmentTargetsCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentTargets(input, ...args);
};
export async function* paginateListAssessmentTargets(
  config: InspectorPaginationConfiguration,
  input: ListAssessmentTargetsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentTargetsCommandOutput;
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
