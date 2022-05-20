// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeRegistriesCommand,
  DescribeRegistriesCommandInput,
  DescribeRegistriesCommandOutput,
} from "../commands/DescribeRegistriesCommand";
import { ECRPUBLIC } from "../ECRPUBLIC";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRPUBLICClient,
  input: DescribeRegistriesCommandInput,
  ...args: any
): Promise<DescribeRegistriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRegistriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECRPUBLIC,
  input: DescribeRegistriesCommandInput,
  ...args: any
): Promise<DescribeRegistriesCommandOutput> => {
  // @ts-ignore
  return await client.describeRegistries(input, ...args);
};
export async function* paginateDescribeRegistries(
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeRegistriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRegistriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRegistriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECRPUBLIC) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRPUBLICClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECRPUBLIC | ECRPUBLICClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
