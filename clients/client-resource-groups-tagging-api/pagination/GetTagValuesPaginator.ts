import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import {
  GetTagValuesCommand,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
} from "../commands/GetTagValuesCommand";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetTagValuesCommandInput,
  ...args: any
): Promise<GetTagValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTagValuesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetTagValuesCommandInput,
  ...args: any
): Promise<GetTagValuesCommandOutput> => {
  // @ts-ignore
  return await client.getTagValues(input, ...args);
};
export async function* getTagValuesPaginate(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetTagValuesCommandInput,
  ...additionalArguments: any
): Paginator<GetTagValuesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTagValuesCommandOutput;
  while (hasNext) {
    input.PaginationToken = token;
    if (config.client instanceof ResourceGroupsTaggingAPI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsTaggingAPIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient");
    }
    yield page;
    token = page.PaginationToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
