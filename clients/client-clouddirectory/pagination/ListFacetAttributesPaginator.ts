import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListFacetAttributesCommand,
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "../commands/ListFacetAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListFacetAttributesCommandInput,
  ...args: any
): Promise<ListFacetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFacetAttributesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListFacetAttributesCommandInput,
  ...args: any
): Promise<ListFacetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listFacetAttributes(input, ...args);
};
export async function* listFacetAttributesPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacetAttributesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListFacetAttributesCommandOutput;
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
