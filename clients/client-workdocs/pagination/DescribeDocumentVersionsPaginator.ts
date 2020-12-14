import { WorkDocs } from "../WorkDocs";
import { WorkDocsClient } from "../WorkDocsClient";
import {
  DescribeDocumentVersionsCommand,
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "../commands/DescribeDocumentVersionsCommand";
import { WorkDocsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeDocumentVersionsCommandInput,
  ...args: any
): Promise<DescribeDocumentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDocumentVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkDocs,
  input: DescribeDocumentVersionsCommandInput,
  ...args: any
): Promise<DescribeDocumentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeDocumentVersions(input, ...args);
};
export async function* paginateDescribeDocumentVersions(
  config: WorkDocsPaginationConfiguration,
  input: DescribeDocumentVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDocumentVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDocumentVersionsCommandOutput;
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
