import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GetCrawlersCommand, GetCrawlersCommandInput, GetCrawlersCommandOutput } from "../commands/GetCrawlersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetCrawlersCommandInput,
  ...args: any
): Promise<GetCrawlersCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCrawlersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: GetCrawlersCommandInput,
  ...args: any
): Promise<GetCrawlersCommandOutput> => {
  // @ts-ignore
  return await client.getCrawlers(input, ...args);
};
export async function* getCrawlersPaginate(
  config: GluePaginationConfiguration,
  input: GetCrawlersCommandInput,
  ...additionalArguments: any
): Paginator<GetCrawlersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCrawlersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
