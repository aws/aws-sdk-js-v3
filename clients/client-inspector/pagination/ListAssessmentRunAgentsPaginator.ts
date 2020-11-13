import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "../commands/ListAssessmentRunAgentsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListAssessmentRunAgentsCommandInput,
  ...args: any
): Promise<ListAssessmentRunAgentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentRunAgentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Inspector,
  input: ListAssessmentRunAgentsCommandInput,
  ...args: any
): Promise<ListAssessmentRunAgentsCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentRunAgents(input, ...args);
};
export async function* listAssessmentRunAgentsPaginate(
  config: InspectorPaginationConfiguration,
  input: ListAssessmentRunAgentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentRunAgentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentRunAgentsCommandOutput;
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
