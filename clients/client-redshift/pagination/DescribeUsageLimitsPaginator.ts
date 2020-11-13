import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeUsageLimitsCommand,
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "../commands/DescribeUsageLimitsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeUsageLimitsCommandInput,
  ...args: any
): Promise<DescribeUsageLimitsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUsageLimitsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeUsageLimitsCommandInput,
  ...args: any
): Promise<DescribeUsageLimitsCommandOutput> => {
  // @ts-ignore
  return await client.describeUsageLimits(input, ...args);
};
export async function* describeUsageLimitsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeUsageLimitsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUsageLimitsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUsageLimitsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
