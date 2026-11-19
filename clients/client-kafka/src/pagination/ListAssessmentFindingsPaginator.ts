// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentFindingsCommand,
  ListAssessmentFindingsCommandInput,
  ListAssessmentFindingsCommandOutput,
} from "../commands/ListAssessmentFindingsCommand";
import { KafkaClient } from "../KafkaClient";
import type { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentFindings: (
  config: KafkaPaginationConfiguration,
  input: ListAssessmentFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentFindingsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListAssessmentFindingsCommandInput,
  ListAssessmentFindingsCommandOutput
>(KafkaClient, ListAssessmentFindingsCommand, "NextToken", "NextToken", "MaxResults");
