import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "../commands/ListDatasetGroupsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListDatasetGroupsCommandInput,
  ...args: any
): Promise<ListDatasetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Forecast,
  input: ListDatasetGroupsCommandInput,
  ...args: any
): Promise<ListDatasetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetGroups(input, ...args);
};
export async function* paginateListDatasetGroups(
  config: ForecastPaginationConfiguration,
  input: ListDatasetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Forecast) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
