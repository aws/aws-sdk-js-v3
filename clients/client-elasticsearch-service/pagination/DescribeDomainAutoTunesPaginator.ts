import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeDomainAutoTunesCommandInput,
  ...args: any
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDomainAutoTunesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeDomainAutoTunesCommandInput,
  ...args: any
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  // @ts-ignore
  return await client.describeDomainAutoTunes(input, ...args);
};
export async function* paginateDescribeDomainAutoTunes(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeDomainAutoTunesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDomainAutoTunesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDomainAutoTunesCommandOutput;
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
