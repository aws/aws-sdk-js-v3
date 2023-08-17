// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetEvidenceFoldersByAssessmentControlCommand,
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentControlCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...args: any
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEvidenceFoldersByAssessmentControlCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetEvidenceFoldersByAssessmentControl(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceFoldersByAssessmentControlCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEvidenceFoldersByAssessmentControlCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManagerClient) {
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
