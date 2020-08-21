import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildsCommandInput,
  ...args: any
): Promise<ListBuildsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildsCommandInput,
  ...args: any
): Promise<ListBuildsCommandOutput> => {
  // @ts-ignore
  return await client.listBuilds(input, ...args);
};
export async function* listBuildsPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBuildsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
