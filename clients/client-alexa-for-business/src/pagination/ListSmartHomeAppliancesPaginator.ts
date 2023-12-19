// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSmartHomeAppliancesCommand,
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "../commands/ListSmartHomeAppliancesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSmartHomeAppliances: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSmartHomeAppliancesCommandInput,
  ...rest: any[]
) => Paginator<ListSmartHomeAppliancesCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput
>(AlexaForBusinessClient, ListSmartHomeAppliancesCommand, "NextToken", "NextToken", "MaxResults");
