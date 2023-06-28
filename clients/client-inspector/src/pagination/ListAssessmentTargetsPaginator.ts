// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssessmentTargetsCommand,
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "../commands/ListAssessmentTargetsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof InspectorClient) {
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
