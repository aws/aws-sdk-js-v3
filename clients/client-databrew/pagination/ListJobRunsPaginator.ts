import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListJobRunsCommandInput,
  ...args: any
): Promise<ListJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobRunsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataBrew,
  input: ListJobRunsCommandInput,
  ...args: any
): Promise<ListJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.listJobRuns(input, ...args);
};
export async function* listJobRunsPaginate(
  config: DataBrewPaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListJobRunsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataBrew) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataBrewClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataBrew | DataBrewClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
