// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProtectConfigurationRuleSetNumberOverridesCommand,
  ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ListProtectConfigurationRuleSetNumberOverridesCommandOutput,
} from "../commands/ListProtectConfigurationRuleSetNumberOverridesCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectConfigurationRuleSetNumberOverrides: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ...rest: any[]
) => Paginator<ListProtectConfigurationRuleSetNumberOverridesCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ListProtectConfigurationRuleSetNumberOverridesCommandOutput
>(
  PinpointSMSVoiceV2Client,
  ListProtectConfigurationRuleSetNumberOverridesCommand,
  "NextToken",
  "NextToken",
  "MaxResults"
);
