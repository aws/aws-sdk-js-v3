// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListResourceScansCommand,
  ListResourceScansCommandInput,
  ListResourceScansCommandOutput,
} from "../commands/ListResourceScansCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceScans: (
  config: CloudFormationPaginationConfiguration,
  input: ListResourceScansCommandInput,
  ...rest: any[]
) => Paginator<ListResourceScansCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListResourceScansCommandInput,
  ListResourceScansCommandOutput
>(CloudFormationClient, ListResourceScansCommand, "NextToken", "NextToken", "MaxResults");
