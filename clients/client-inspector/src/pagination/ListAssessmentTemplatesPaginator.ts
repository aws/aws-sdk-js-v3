// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "../commands/ListAssessmentTemplatesCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListAssessmentTemplatesCommandInput,
  ...args: any
): Promise<ListAssessmentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssessmentTemplates(
  config: InspectorPaginationConfiguration,
  input: ListAssessmentTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentTemplatesCommandOutput;
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
