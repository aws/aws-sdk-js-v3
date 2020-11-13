import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  DescribeRemediationExceptionsCommand,
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "../commands/DescribeRemediationExceptionsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeRemediationExceptionsCommandInput,
  ...args: any
): Promise<DescribeRemediationExceptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRemediationExceptionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeRemediationExceptionsCommandInput,
  ...args: any
): Promise<DescribeRemediationExceptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeRemediationExceptions(input, ...args);
};
export async function* describeRemediationExceptionsPaginate(
  config: ConfigServicePaginationConfiguration,
  input: DescribeRemediationExceptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRemediationExceptionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRemediationExceptionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
