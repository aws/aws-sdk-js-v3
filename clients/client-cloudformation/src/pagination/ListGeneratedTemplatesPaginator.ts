// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListGeneratedTemplatesCommand,
  ListGeneratedTemplatesCommandInput,
  ListGeneratedTemplatesCommandOutput,
} from "../commands/ListGeneratedTemplatesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGeneratedTemplates: (
  config: CloudFormationPaginationConfiguration,
  input: ListGeneratedTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListGeneratedTemplatesCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListGeneratedTemplatesCommandInput,
  ListGeneratedTemplatesCommandOutput
>(CloudFormationClient, ListGeneratedTemplatesCommand, "NextToken", "NextToken", "MaxResults");
