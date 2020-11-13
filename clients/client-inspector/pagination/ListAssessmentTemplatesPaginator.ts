import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "../commands/ListAssessmentTemplatesCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListAssessmentTemplatesCommandInput,
  ...args: any
): Promise<ListAssessmentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentTemplatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Inspector,
  input: ListAssessmentTemplatesCommandInput,
  ...args: any
): Promise<ListAssessmentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentTemplates(input, ...args);
};
export async function* listAssessmentTemplatesPaginate(
  config: InspectorPaginationConfiguration,
  input: ListAssessmentTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
