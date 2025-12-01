// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "../commands/ListAssociationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociations: (
  config: SSMPaginationConfiguration,
  input: ListAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociationsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput
>(SSMClient, ListAssociationsCommand, "NextToken", "NextToken", "MaxResults");
