// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "../commands/ListConfigurationsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurations: (
  config: KafkaPaginationConfiguration,
  input: ListConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
>(KafkaClient, ListConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
