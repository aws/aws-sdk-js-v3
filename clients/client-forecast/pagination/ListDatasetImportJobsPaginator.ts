import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListDatasetImportJobsCommandInput,
  ...args: any
): Promise<ListDatasetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetImportJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Forecast,
  input: ListDatasetImportJobsCommandInput,
  ...args: any
): Promise<ListDatasetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetImportJobs(input, ...args);
};
export async function* listDatasetImportJobsPaginate(
  config: ForecastPaginationConfiguration,
  input: ListDatasetImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetImportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDatasetImportJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Forecast) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
