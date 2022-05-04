// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMailboxPermissionsCommand,
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "../commands/ListMailboxPermissionsCommand";
import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListMailboxPermissionsCommandInput,
  ...args: any
): Promise<ListMailboxPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMailboxPermissionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkMail,
  input: ListMailboxPermissionsCommandInput,
  ...args: any
): Promise<ListMailboxPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.listMailboxPermissions(input, ...args);
};
export async function* paginateListMailboxPermissions(
  config: WorkMailPaginationConfiguration,
  input: ListMailboxPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListMailboxPermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMailboxPermissionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
