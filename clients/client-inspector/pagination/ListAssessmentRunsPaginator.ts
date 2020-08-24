import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  ListAssessmentRunsCommand,
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
} from "../commands/ListAssessmentRunsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListAssessmentRunsCommandInput,
  ...args: any
): Promise<ListAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentRunsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Inspector,
  input: ListAssessmentRunsCommandInput,
  ...args: any
): Promise<ListAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentRuns(input, ...args);
};
export async function* listAssessmentRunsPaginate(
  config: InspectorPaginationConfiguration,
  input: ListAssessmentRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentRunsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAssessmentRunsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
