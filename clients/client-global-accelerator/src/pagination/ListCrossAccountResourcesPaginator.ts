// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCrossAccountResourcesCommand,
  ListCrossAccountResourcesCommandInput,
  ListCrossAccountResourcesCommandOutput,
} from "../commands/ListCrossAccountResourcesCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCrossAccountResources: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCrossAccountResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListCrossAccountResourcesCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCrossAccountResourcesCommandInput,
  ListCrossAccountResourcesCommandOutput
>(GlobalAcceleratorClient, ListCrossAccountResourcesCommand, "NextToken", "NextToken", "MaxResults");
