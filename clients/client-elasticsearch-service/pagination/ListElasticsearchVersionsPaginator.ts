import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  ListElasticsearchVersionsCommand,
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "../commands/ListElasticsearchVersionsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListElasticsearchVersionsCommandInput,
  ...args: any
): Promise<ListElasticsearchVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListElasticsearchVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: ListElasticsearchVersionsCommandInput,
  ...args: any
): Promise<ListElasticsearchVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listElasticsearchVersions(input, ...args);
};
export async function* listElasticsearchVersionsPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListElasticsearchVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListElasticsearchVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListElasticsearchVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
