// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypes: (
  config: CloudFormationPaginationConfiguration,
  input: ListTypesCommandInput,
  ...rest: any[]
) => Paginator<ListTypesCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListTypesCommandInput,
  ListTypesCommandOutput
>(CloudFormationClient, ListTypesCommand, "NextToken", "NextToken", "MaxResults");
