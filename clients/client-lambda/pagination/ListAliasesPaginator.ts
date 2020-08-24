import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAliasesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Lambda,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listAliases(input, ...args);
};
export async function* listAliasesPaginate(
  config: LambdaPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAliasesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAliasesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
