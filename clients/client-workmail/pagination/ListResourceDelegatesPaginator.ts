import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import {
  ListResourceDelegatesCommand,
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "../commands/ListResourceDelegatesCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListResourceDelegatesCommandInput,
  ...args: any
): Promise<ListResourceDelegatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceDelegatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListResourceDelegatesCommandInput,
  ...args: any
): Promise<ListResourceDelegatesCommandOutput> => {
  // @ts-ignore
  return await client.listResourceDelegates(input, ...args);
};
export async function* listResourceDelegatesPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListResourceDelegatesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceDelegatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListResourceDelegatesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
