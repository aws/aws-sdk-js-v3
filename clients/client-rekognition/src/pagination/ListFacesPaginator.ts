// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListFacesCommand, ListFacesCommandInput, ListFacesCommandOutput } from "../commands/ListFacesCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListFacesCommandInput,
  ...args: any
): Promise<ListFacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFacesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFaces(
  config: RekognitionPaginationConfiguration,
  input: ListFacesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFacesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
