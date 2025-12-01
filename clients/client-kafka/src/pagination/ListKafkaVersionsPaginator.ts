// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKafkaVersionsCommand,
  ListKafkaVersionsCommandInput,
  ListKafkaVersionsCommandOutput,
} from "../commands/ListKafkaVersionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKafkaVersions: (
  config: KafkaPaginationConfiguration,
  input: ListKafkaVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListKafkaVersionsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListKafkaVersionsCommandInput,
  ListKafkaVersionsCommandOutput
>(KafkaClient, ListKafkaVersionsCommand, "NextToken", "NextToken", "MaxResults");
