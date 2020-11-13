import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
} from "../commands/DescribeOptionGroupOptionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeOptionGroupOptionsCommandInput,
  ...args: any
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOptionGroupOptionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeOptionGroupOptionsCommandInput,
  ...args: any
): Promise<DescribeOptionGroupOptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeOptionGroupOptions(input, ...args);
};
export async function* describeOptionGroupOptionsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeOptionGroupOptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOptionGroupOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOptionGroupOptionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
