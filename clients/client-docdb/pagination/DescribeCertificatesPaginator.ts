import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeCertificatesCommandInput,
  ...args: any
): Promise<DescribeCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCertificatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: DocDB,
  input: DescribeCertificatesCommandInput,
  ...args: any
): Promise<DescribeCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.describeCertificates(input, ...args);
};
export async function* describeCertificatesPaginate(
  config: DocDBPaginationConfiguration,
  input: DescribeCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCertificatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCertificatesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
