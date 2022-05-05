// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "../commands/ListAssessmentTemplatesCommand";
import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListAssessmentTemplatesCommandInput,
  ...args: any
): Promise<ListAssessmentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentTemplates(input, ...args);
};
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
