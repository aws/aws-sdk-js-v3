// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociationVersionsCommand,
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "../commands/ListAssociationVersionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociationVersions: (
  config: SSMPaginationConfiguration,
  input: ListAssociationVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociationVersionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput
>(SSMClient, ListAssociationVersionsCommand, "NextToken", "NextToken", "MaxResults");
