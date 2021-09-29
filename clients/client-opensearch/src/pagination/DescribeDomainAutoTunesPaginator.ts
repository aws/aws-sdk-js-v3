import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import {
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import { OpenSearchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
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
  client: OpenSearch,
  input: DescribeDomainAutoTunesCommandInput,
  ...args: any
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  // @ts-ignore
  return await client.describeDomainAutoTunes(input, ...args);
};
export async function* paginateDescribeDomainAutoTunes(
  config: OpenSearchPaginationConfiguration,
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
    if (config.client instanceof OpenSearch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
