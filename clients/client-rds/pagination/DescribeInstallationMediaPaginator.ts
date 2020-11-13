import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeInstallationMediaCommand,
  DescribeInstallationMediaCommandInput,
  DescribeInstallationMediaCommandOutput,
} from "../commands/DescribeInstallationMediaCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeInstallationMediaCommandInput,
  ...args: any
): Promise<DescribeInstallationMediaCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstallationMediaCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeInstallationMediaCommandInput,
  ...args: any
): Promise<DescribeInstallationMediaCommandOutput> => {
  // @ts-ignore
  return await client.describeInstallationMedia(input, ...args);
};
export async function* describeInstallationMediaPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeInstallationMediaCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstallationMediaCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstallationMediaCommandOutput;
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
