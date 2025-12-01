// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SimulatePrincipalPolicyCommand,
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "../commands/SimulatePrincipalPolicyCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSimulatePrincipalPolicy: (
  config: IAMPaginationConfiguration,
  input: SimulatePrincipalPolicyCommandInput,
  ...rest: any[]
) => Paginator<SimulatePrincipalPolicyCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput
>(IAMClient, SimulatePrincipalPolicyCommand, "Marker", "Marker", "MaxItems");
