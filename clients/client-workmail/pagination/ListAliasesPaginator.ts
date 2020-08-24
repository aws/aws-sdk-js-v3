import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAliasesCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listAliases(input, ...args);
};
export async function* listAliasesPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAliasesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAliasesCommandOutput;
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
