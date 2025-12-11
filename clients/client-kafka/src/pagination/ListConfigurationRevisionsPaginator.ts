// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "../commands/ListConfigurationRevisionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationRevisions: (
  config: KafkaPaginationConfiguration,
  input: ListConfigurationRevisionsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationRevisionsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput
>(KafkaClient, ListConfigurationRevisionsCommand, "NextToken", "NextToken", "MaxResults");
