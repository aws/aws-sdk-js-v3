import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "../commands/ListPolicyVersionsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListPolicyVersionsCommandInput,
  ...args: any
): Promise<ListPolicyVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListPolicyVersionsCommandInput,
  ...args: any
): Promise<ListPolicyVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listPolicyVersions(input, ...args);
};
export async function* listPolicyVersionsPaginate(
  config: IAMPaginationConfiguration,
  input: ListPolicyVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyVersionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
