import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DownloadDBLogFilePortionCommand,
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "../commands/DownloadDBLogFilePortionCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DownloadDBLogFilePortionCommandInput,
  ...args: any
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  // @ts-ignore
  return await client.send(new DownloadDBLogFilePortionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DownloadDBLogFilePortionCommandInput,
  ...args: any
): Promise<DownloadDBLogFilePortionCommandOutput> => {
  // @ts-ignore
  return await client.downloadDBLogFilePortion(input, ...args);
};
export async function* paginateDownloadDBLogFilePortion(
  config: RDSPaginationConfiguration,
  input: DownloadDBLogFilePortionCommandInput,
  ...additionalArguments: any
): Paginator<DownloadDBLogFilePortionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DownloadDBLogFilePortionCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["NumberOfLines"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
