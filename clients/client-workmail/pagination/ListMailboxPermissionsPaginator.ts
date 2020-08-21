import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import {
  ListMailboxPermissionsCommand,
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "../commands/ListMailboxPermissionsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListMailboxPermissionsCommandInput,
  ...args: any
): Promise<ListMailboxPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMailboxPermissionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListMailboxPermissionsCommandInput,
  ...args: any
): Promise<ListMailboxPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.listMailboxPermissions(input, ...args);
};
export async function* listMailboxPermissionsPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListMailboxPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListMailboxPermissionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMailboxPermissionsCommandOutput;
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
