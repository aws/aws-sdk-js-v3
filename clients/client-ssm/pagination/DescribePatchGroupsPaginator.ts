import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribePatchGroupsCommand,
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "../commands/DescribePatchGroupsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribePatchGroupsCommandInput,
  ...args: any
): Promise<DescribePatchGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePatchGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribePatchGroupsCommandInput,
  ...args: any
): Promise<DescribePatchGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describePatchGroups(input, ...args);
};
export async function* paginateDescribePatchGroups(
  config: SSMPaginationConfiguration,
  input: DescribePatchGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePatchGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePatchGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
