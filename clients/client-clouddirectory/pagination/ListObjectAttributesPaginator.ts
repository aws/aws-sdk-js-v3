import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectAttributesCommand,
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "../commands/ListObjectAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectAttributesCommandInput,
  ...args: any
): Promise<ListObjectAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectAttributesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectAttributesCommandInput,
  ...args: any
): Promise<ListObjectAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listObjectAttributes(input, ...args);
};
export async function* listObjectAttributesPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectAttributesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListObjectAttributesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
