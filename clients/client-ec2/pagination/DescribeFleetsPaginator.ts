import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeFleetsCommand,
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput,
} from "../commands/DescribeFleetsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeFleetsCommandInput,
  ...args: any
): Promise<DescribeFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeFleetsCommandInput,
  ...args: any
): Promise<DescribeFleetsCommandOutput> => {
  // @ts-ignore
  return await client.describeFleets(input, ...args);
};
export async function* describeFleetsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeFleetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetsCommandOutput;
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
