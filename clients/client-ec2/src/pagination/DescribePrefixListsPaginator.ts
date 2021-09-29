import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribePrefixListsCommand,
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
} from "../commands/DescribePrefixListsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribePrefixListsCommandInput,
  ...args: any
): Promise<DescribePrefixListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePrefixListsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribePrefixListsCommandInput,
  ...args: any
): Promise<DescribePrefixListsCommandOutput> => {
  // @ts-ignore
  return await client.describePrefixLists(input, ...args);
};
export async function* paginateDescribePrefixLists(
  config: EC2PaginationConfiguration,
  input: DescribePrefixListsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePrefixListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePrefixListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
