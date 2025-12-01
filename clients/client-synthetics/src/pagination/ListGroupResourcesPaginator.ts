// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "../commands/ListGroupResourcesCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupResources: (
  config: SyntheticsPaginationConfiguration,
  input: ListGroupResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListGroupResourcesCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput
>(SyntheticsClient, ListGroupResourcesCommand, "NextToken", "NextToken", "MaxResults");
