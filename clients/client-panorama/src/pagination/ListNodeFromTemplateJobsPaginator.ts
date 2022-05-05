// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListNodeFromTemplateJobsCommand,
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
} from "../commands/ListNodeFromTemplateJobsCommand";
import { Panorama } from "../Panorama";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListNodeFromTemplateJobsCommandInput,
  ...args: any
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNodeFromTemplateJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Panorama,
  input: ListNodeFromTemplateJobsCommandInput,
  ...args: any
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  // @ts-ignore
  return await client.listNodeFromTemplateJobs(input, ...args);
};
export async function* paginateListNodeFromTemplateJobs(
  config: PanoramaPaginationConfiguration,
  input: ListNodeFromTemplateJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListNodeFromTemplateJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNodeFromTemplateJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Panorama) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PanoramaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Panorama | PanoramaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
