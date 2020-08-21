import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListCommandInvocationsCommand,
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "../commands/ListCommandInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListCommandInvocationsCommandInput,
  ...args: any
): Promise<ListCommandInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCommandInvocationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: ListCommandInvocationsCommandInput,
  ...args: any
): Promise<ListCommandInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.listCommandInvocations(input, ...args);
};
export async function* listCommandInvocationsPaginate(
  config: SSMPaginationConfiguration,
  input: ListCommandInvocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCommandInvocationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCommandInvocationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
