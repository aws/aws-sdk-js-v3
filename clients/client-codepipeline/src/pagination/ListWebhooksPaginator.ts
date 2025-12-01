// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListWebhooksCommand,
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput,
} from "../commands/ListWebhooksCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebhooks: (
  config: CodePipelinePaginationConfiguration,
  input: ListWebhooksCommandInput,
  ...rest: any[]
) => Paginator<ListWebhooksCommandOutput> = createPaginator<
  CodePipelinePaginationConfiguration,
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput
>(CodePipelineClient, ListWebhooksCommand, "NextToken", "NextToken", "MaxResults");
