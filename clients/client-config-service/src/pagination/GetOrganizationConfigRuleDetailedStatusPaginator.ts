// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOrganizationConfigRuleDetailedStatusCommand,
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "../commands/GetOrganizationConfigRuleDetailedStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOrganizationConfigRuleDetailedStatus: (
  config: ConfigServicePaginationConfiguration,
  input: GetOrganizationConfigRuleDetailedStatusCommandInput,
  ...rest: any[]
) => Paginator<GetOrganizationConfigRuleDetailedStatusCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput
>(ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand, "NextToken", "NextToken", "Limit");
