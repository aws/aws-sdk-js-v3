import { MediaStore } from "../MediaStore";
import { MediaStoreClient } from "../MediaStoreClient";
import {
  ListContainersCommand,
  ListContainersCommandInput,
  ListContainersCommandOutput,
} from "../commands/ListContainersCommand";
import { MediaStorePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaStoreClient,
  input: ListContainersCommandInput,
  ...args: any
): Promise<ListContainersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContainersCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaStore,
  input: ListContainersCommandInput,
  ...args: any
): Promise<ListContainersCommandOutput> => {
  // @ts-ignore
  return await client.listContainers(input, ...args);
};
export async function* listContainersPaginate(
  config: MediaStorePaginationConfiguration,
  input: ListContainersCommandInput,
  ...additionalArguments: any
): Paginator<ListContainersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContainersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaStore) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaStoreClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaStore | MediaStoreClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
