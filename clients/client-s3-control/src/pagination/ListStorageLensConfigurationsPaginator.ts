import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";
import {
  ListStorageLensConfigurationsCommand,
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "../commands/ListStorageLensConfigurationsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListStorageLensConfigurationsCommandInput,
  ...args: any
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStorageLensConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Control,
  input: ListStorageLensConfigurationsCommandInput,
  ...args: any
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listStorageLensConfigurations(input, ...args);
};
export async function* paginateListStorageLensConfigurations(
  config: S3ControlPaginationConfiguration,
  input: ListStorageLensConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListStorageLensConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStorageLensConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof S3Control) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3ControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Control | S3ControlClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
