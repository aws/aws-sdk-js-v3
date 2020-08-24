import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "../commands/ListBranchesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListBranchesCommandInput,
  ...args: any
): Promise<ListBranchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBranchesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeCommit,
  input: ListBranchesCommandInput,
  ...args: any
): Promise<ListBranchesCommandOutput> => {
  // @ts-ignore
  return await client.listBranches(input, ...args);
};
export async function* listBranchesPaginate(
  config: CodeCommitPaginationConfiguration,
  input: ListBranchesCommandInput,
  ...additionalArguments: any
): Paginator<ListBranchesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBranchesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
