import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeNodeConfigurationOptionsCommand,
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "../commands/DescribeNodeConfigurationOptionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...args: any
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNodeConfigurationOptionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...args: any
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeNodeConfigurationOptions(input, ...args);
};
export async function* describeNodeConfigurationOptionsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNodeConfigurationOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeNodeConfigurationOptionsCommandOutput;
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
