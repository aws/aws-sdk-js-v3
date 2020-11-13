import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListSSHPublicKeysCommand,
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "../commands/ListSSHPublicKeysCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListSSHPublicKeysCommandInput,
  ...args: any
): Promise<ListSSHPublicKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSSHPublicKeysCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListSSHPublicKeysCommandInput,
  ...args: any
): Promise<ListSSHPublicKeysCommandOutput> => {
  // @ts-ignore
  return await client.listSSHPublicKeys(input, ...args);
};
export async function* listSSHPublicKeysPaginate(
  config: IAMPaginationConfiguration,
  input: ListSSHPublicKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListSSHPublicKeysCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSSHPublicKeysCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
