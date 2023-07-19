// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchImageSetsCommand,
  SearchImageSetsCommandInput,
  SearchImageSetsCommandOutput,
} from "../commands/SearchImageSetsCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MedicalImagingClient,
  input: SearchImageSetsCommandInput,
  ...args: any
): Promise<SearchImageSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchImageSetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchImageSets(
  config: MedicalImagingPaginationConfiguration,
  input: SearchImageSetsCommandInput,
  ...additionalArguments: any
): Paginator<SearchImageSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchImageSetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MedicalImagingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MedicalImaging | MedicalImagingClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
