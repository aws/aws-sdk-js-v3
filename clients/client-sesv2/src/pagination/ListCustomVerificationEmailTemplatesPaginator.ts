// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomVerificationEmailTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SESv2,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listCustomVerificationEmailTemplates(input, ...args);
};
export async function* paginateListCustomVerificationEmailTemplates(
  config: SESv2PaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomVerificationEmailTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomVerificationEmailTemplatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
