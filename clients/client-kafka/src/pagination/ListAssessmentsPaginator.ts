// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentsCommand,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput,
} from "../commands/ListAssessmentsCommand";
import { KafkaClient } from "../KafkaClient";
import type { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessments: (
  config: KafkaPaginationConfiguration,
  input: ListAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput
>(KafkaClient, ListAssessmentsCommand, "NextToken", "NextToken", "MaxResults");
