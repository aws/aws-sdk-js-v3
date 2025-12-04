// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSegmentDefinitionsCommand,
  ListSegmentDefinitionsCommandInput,
  ListSegmentDefinitionsCommandOutput,
} from "../commands/ListSegmentDefinitionsCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSegmentDefinitions: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListSegmentDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListSegmentDefinitionsCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListSegmentDefinitionsCommandInput,
  ListSegmentDefinitionsCommandOutput
>(CustomerProfilesClient, ListSegmentDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
