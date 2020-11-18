import { CostExplorer } from "../CostExplorer";
import { CostExplorerClient } from "../CostExplorerClient";
import {
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "../commands/GetSavingsPlansCoverageCommand";
import { CostExplorerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CostExplorerClient,
  input: GetSavingsPlansCoverageCommandInput,
  ...args: any
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSavingsPlansCoverageCommand(input), ...args);
};
const makePagedRequest = async (
  client: CostExplorer,
  input: GetSavingsPlansCoverageCommandInput,
  ...args: any
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  // @ts-ignore
  return await client.getSavingsPlansCoverage(input, ...args);
};
export async function* paginateGetSavingsPlansCoverage(
  config: CostExplorerPaginationConfiguration,
  input: GetSavingsPlansCoverageCommandInput,
  ...additionalArguments: any
): Paginator<GetSavingsPlansCoverageCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSavingsPlansCoverageCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostExplorer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CostExplorerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostExplorer | CostExplorerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
