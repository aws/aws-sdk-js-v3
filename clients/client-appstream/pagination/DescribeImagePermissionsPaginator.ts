import { AppStream } from "../AppStream";
import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeImagePermissionsCommand,
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "../commands/DescribeImagePermissionsCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppStreamClient,
  input: DescribeImagePermissionsCommandInput,
  ...args: any
): Promise<DescribeImagePermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImagePermissionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: AppStream,
  input: DescribeImagePermissionsCommandInput,
  ...args: any
): Promise<DescribeImagePermissionsCommandOutput> => {
  // @ts-ignore
  return await client.describeImagePermissions(input, ...args);
};
export async function* paginateDescribeImagePermissions(
  config: AppStreamPaginationConfiguration,
  input: DescribeImagePermissionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImagePermissionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImagePermissionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppStream) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppStreamClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppStream | AppStreamClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
