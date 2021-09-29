import { SES } from "../SES";
import { SESClient } from "../SESClient";
import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SESClient,
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
  client: SES,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...args: any
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listCustomVerificationEmailTemplates(input, ...args);
};
export async function* paginateListCustomVerificationEmailTemplates(
  config: SESPaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomVerificationEmailTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomVerificationEmailTemplatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SES) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SES | SESClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
