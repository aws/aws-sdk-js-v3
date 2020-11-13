import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import {
  ListImageBuildVersionsCommand,
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "../commands/ListImageBuildVersionsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImageBuildVersionsCommandInput,
  ...args: any
): Promise<ListImageBuildVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImageBuildVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImageBuildVersionsCommandInput,
  ...args: any
): Promise<ListImageBuildVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listImageBuildVersions(input, ...args);
};
export async function* listImageBuildVersionsPaginate(
  config: ImagebuilderPaginationConfiguration,
  input: ListImageBuildVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListImageBuildVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImageBuildVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
