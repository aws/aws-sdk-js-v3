import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "../commands/ListEmailIdentitiesCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListEmailIdentitiesCommandInput,
  ...args: any
): Promise<ListEmailIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEmailIdentitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListEmailIdentitiesCommandInput,
  ...args: any
): Promise<ListEmailIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.listEmailIdentities(input, ...args);
};
export async function* paginateListEmailIdentities(
  config: PinpointEmailPaginationConfiguration,
  input: ListEmailIdentitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListEmailIdentitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEmailIdentitiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
