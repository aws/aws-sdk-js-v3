import { WorkDocs } from "../WorkDocs";
import { WorkDocsClient } from "../WorkDocsClient";
import {
  DescribeFolderContentsCommand,
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "../commands/DescribeFolderContentsCommand";
import { WorkDocsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeFolderContentsCommandInput,
  ...args: any
): Promise<DescribeFolderContentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFolderContentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkDocs,
  input: DescribeFolderContentsCommandInput,
  ...args: any
): Promise<DescribeFolderContentsCommandOutput> => {
  // @ts-ignore
  return await client.describeFolderContents(input, ...args);
};
export async function* paginateDescribeFolderContents(
  config: WorkDocsPaginationConfiguration,
  input: DescribeFolderContentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFolderContentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFolderContentsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
