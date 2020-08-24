import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";
import {
  DescribeAddressesCommand,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "../commands/DescribeAddressesCommand";
import { SnowballPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SnowballClient,
  input: DescribeAddressesCommandInput,
  ...args: any
): Promise<DescribeAddressesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAddressesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Snowball,
  input: DescribeAddressesCommandInput,
  ...args: any
): Promise<DescribeAddressesCommandOutput> => {
  // @ts-ignore
  return await client.describeAddresses(input, ...args);
};
export async function* describeAddressesPaginate(
  config: SnowballPaginationConfiguration,
  input: DescribeAddressesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAddressesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeAddressesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Snowball) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowballClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Snowball | SnowballClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
