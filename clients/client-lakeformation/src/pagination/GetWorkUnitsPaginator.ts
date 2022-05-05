// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetWorkUnitsCommand,
  GetWorkUnitsCommandInput,
  GetWorkUnitsCommandOutput,
} from "../commands/GetWorkUnitsCommand";
import { LakeFormation } from "../LakeFormation";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: GetWorkUnitsCommandInput,
  ...args: any
): Promise<GetWorkUnitsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetWorkUnitsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LakeFormation,
  input: GetWorkUnitsCommandInput,
  ...args: any
): Promise<GetWorkUnitsCommandOutput> => {
  // @ts-ignore
  return await client.getWorkUnits(input, ...args);
};
export async function* paginateGetWorkUnits(
  config: LakeFormationPaginationConfiguration,
  input: GetWorkUnitsCommandInput,
  ...additionalArguments: any
): Paginator<GetWorkUnitsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetWorkUnitsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof LakeFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
