import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetCrawlerMetricsCommand,
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
} from "../commands/GetCrawlerMetricsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetCrawlerMetricsCommandInput,
  ...args: any
): Promise<GetCrawlerMetricsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCrawlerMetricsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetCrawlerMetricsCommandInput,
  ...args: any
): Promise<GetCrawlerMetricsCommandOutput> => {
  // @ts-ignore
  return await client.getCrawlerMetrics(input, ...args);
};
export async function* getCrawlerMetricsPaginate(
  config: GluePaginationConfiguration,
  input: GetCrawlerMetricsCommandInput,
  ...additionalArguments: any
): Paginator<GetCrawlerMetricsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetCrawlerMetricsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
