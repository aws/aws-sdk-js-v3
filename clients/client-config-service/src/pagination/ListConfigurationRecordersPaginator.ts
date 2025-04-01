// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConfigurationRecordersCommand,
  ListConfigurationRecordersCommandInput,
  ListConfigurationRecordersCommandOutput,
} from "../commands/ListConfigurationRecordersCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationRecorders: (
  config: ConfigServicePaginationConfiguration,
  input: ListConfigurationRecordersCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationRecordersCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListConfigurationRecordersCommandInput,
  ListConfigurationRecordersCommandOutput
>(ConfigServiceClient, ListConfigurationRecordersCommand, "NextToken", "NextToken", "MaxResults");
