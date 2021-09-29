import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import {
  DescribeStorageVirtualMachinesCommand,
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "../commands/DescribeStorageVirtualMachinesCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeStorageVirtualMachinesCommandInput,
  ...args: any
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStorageVirtualMachinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FSx,
  input: DescribeStorageVirtualMachinesCommandInput,
  ...args: any
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  // @ts-ignore
  return await client.describeStorageVirtualMachines(input, ...args);
};
export async function* paginateDescribeStorageVirtualMachines(
  config: FSxPaginationConfiguration,
  input: DescribeStorageVirtualMachinesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStorageVirtualMachinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStorageVirtualMachinesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSx) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
