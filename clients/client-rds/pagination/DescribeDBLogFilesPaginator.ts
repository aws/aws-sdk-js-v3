import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBLogFilesCommand,
  DescribeDBLogFilesCommandInput,
  DescribeDBLogFilesCommandOutput,
} from "../commands/DescribeDBLogFilesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBLogFilesCommandInput,
  ...args: any
): Promise<DescribeDBLogFilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBLogFilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBLogFilesCommandInput,
  ...args: any
): Promise<DescribeDBLogFilesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBLogFiles(input, ...args);
};
export async function* describeDBLogFilesPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBLogFilesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBLogFilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBLogFilesCommandOutput;
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
