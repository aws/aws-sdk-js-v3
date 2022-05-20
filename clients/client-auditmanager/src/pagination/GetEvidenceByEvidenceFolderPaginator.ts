// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetEvidenceByEvidenceFolderCommand,
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "../commands/GetEvidenceByEvidenceFolderCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetEvidenceByEvidenceFolderCommandInput,
  ...args: any
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEvidenceByEvidenceFolderCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: GetEvidenceByEvidenceFolderCommandInput,
  ...args: any
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  // @ts-ignore
  return await client.getEvidenceByEvidenceFolder(input, ...args);
};
export async function* paginateGetEvidenceByEvidenceFolder(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceByEvidenceFolderCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceByEvidenceFolderCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEvidenceByEvidenceFolderCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
