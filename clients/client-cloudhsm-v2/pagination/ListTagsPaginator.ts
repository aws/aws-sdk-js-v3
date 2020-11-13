import { CloudHSMV2 } from "../CloudHSMV2";
import { CloudHSMV2Client } from "../CloudHSMV2Client";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudHSMV2Client,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudHSMV2,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.listTags(input, ...args);
};
export async function* listTagsPaginate(
  config: CloudHSMV2PaginationConfiguration,
  input: ListTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudHSMV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudHSMV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudHSMV2 | CloudHSMV2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
