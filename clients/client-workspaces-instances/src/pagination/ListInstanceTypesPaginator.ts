// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceTypesCommand,
  ListInstanceTypesCommandInput,
  ListInstanceTypesCommandOutput,
} from "../commands/ListInstanceTypesCommand";
import { WorkspacesInstancesClient } from "../WorkspacesInstancesClient";
import { WorkspacesInstancesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceTypes: (
  config: WorkspacesInstancesPaginationConfiguration,
  input: ListInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceTypesCommandOutput> = createPaginator<
  WorkspacesInstancesPaginationConfiguration,
  ListInstanceTypesCommandInput,
  ListInstanceTypesCommandOutput
>(WorkspacesInstancesClient, ListInstanceTypesCommand, "NextToken", "NextToken", "MaxResults");
