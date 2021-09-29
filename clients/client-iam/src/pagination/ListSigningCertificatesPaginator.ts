import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListSigningCertificatesCommand,
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "../commands/ListSigningCertificatesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListSigningCertificatesCommandInput,
  ...args: any
): Promise<ListSigningCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningCertificatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListSigningCertificatesCommandInput,
  ...args: any
): Promise<ListSigningCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.listSigningCertificates(input, ...args);
};
export async function* paginateListSigningCertificates(
  config: IAMPaginationConfiguration,
  input: ListSigningCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSigningCertificatesCommandOutput;
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
