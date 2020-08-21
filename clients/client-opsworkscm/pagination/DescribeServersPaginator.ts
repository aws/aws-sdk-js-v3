import { OpsWorksCM } from "../OpsWorksCM";
import { OpsWorksCMClient } from "../OpsWorksCMClient";
import {
  DescribeServersCommand,
  DescribeServersCommandInput,
  DescribeServersCommandOutput,
} from "../commands/DescribeServersCommand";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OpsWorksCMClient,
  input: DescribeServersCommandInput,
  ...args: any
): Promise<DescribeServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServersCommand(input, ...args));
};
const makePagedRequest = async (
  client: OpsWorksCM,
  input: DescribeServersCommandInput,
  ...args: any
): Promise<DescribeServersCommandOutput> => {
  // @ts-ignore
  return await client.describeServers(input, ...args);
};
export async function* describeServersPaginate(
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeServersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeServersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpsWorksCM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpsWorksCMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpsWorksCM | OpsWorksCMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
