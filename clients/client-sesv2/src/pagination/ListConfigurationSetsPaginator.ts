// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationSets: (
  config: SESv2PaginationConfiguration,
  input: ListConfigurationSetsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationSetsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput
>(SESv2Client, ListConfigurationSetsCommand, "NextToken", "NextToken", "PageSize");
