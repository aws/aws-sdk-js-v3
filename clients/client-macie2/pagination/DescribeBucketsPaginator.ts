import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import {
  DescribeBucketsCommand,
  DescribeBucketsCommandInput,
  DescribeBucketsCommandOutput,
} from "../commands/DescribeBucketsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: Macie2Client,
  input: DescribeBucketsCommandInput,
  ...args: any
): Promise<DescribeBucketsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBucketsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Macie2,
  input: DescribeBucketsCommandInput,
  ...args: any
): Promise<DescribeBucketsCommandOutput> => {
  // @ts-ignore
  return await client.describeBuckets(input, ...args);
};
export async function* describeBucketsPaginate(
  config: Macie2PaginationConfiguration,
  input: DescribeBucketsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBucketsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBucketsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
