import { ACMPCA } from "../ACMPCA";
import { ACMPCAClient } from "../ACMPCAClient";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ACMPCAClient,
  input: ListPermissionsCommandInput,
  ...args: any
): Promise<ListPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ACMPCA,
  input: ListPermissionsCommandInput,
  ...args: any
): Promise<ListPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.listPermissions(input, ...args);
};
export async function* listPermissionsPaginate(
  config: ACMPCAPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPermissionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ACMPCA) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMPCAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACMPCA | ACMPCAClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
