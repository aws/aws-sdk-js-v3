import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "../commands/GetPackageVersionHistoryCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: GetPackageVersionHistoryCommandInput,
  ...args: any
): Promise<GetPackageVersionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPackageVersionHistoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: GetPackageVersionHistoryCommandInput,
  ...args: any
): Promise<GetPackageVersionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getPackageVersionHistory(input, ...args);
};
export async function* paginateGetPackageVersionHistory(
  config: ElasticsearchServicePaginationConfiguration,
  input: GetPackageVersionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetPackageVersionHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPackageVersionHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
