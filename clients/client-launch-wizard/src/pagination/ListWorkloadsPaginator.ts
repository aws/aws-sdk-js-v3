// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "../commands/ListWorkloadsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloads: (
  config: LaunchWizardPaginationConfiguration,
  input: ListWorkloadsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadsCommandOutput> = createPaginator<
  LaunchWizardPaginationConfiguration,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput
>(LaunchWizardClient, ListWorkloadsCommand, "nextToken", "nextToken", "maxResults");
