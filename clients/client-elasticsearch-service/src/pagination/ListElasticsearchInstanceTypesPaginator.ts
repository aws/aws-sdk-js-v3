import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "../commands/ListElasticsearchInstanceTypesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...args: any
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListElasticsearchInstanceTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticsearchService,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...args: any
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.listElasticsearchInstanceTypes(input, ...args);
};
export async function* paginateListElasticsearchInstanceTypes(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListElasticsearchInstanceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListElasticsearchInstanceTypesCommandOutput;
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
