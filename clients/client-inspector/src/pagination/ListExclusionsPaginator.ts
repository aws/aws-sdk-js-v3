// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExclusionsCommand,
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput,
} from "../commands/ListExclusionsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExclusions: (
  config: InspectorPaginationConfiguration,
  input: ListExclusionsCommandInput,
  ...rest: any[]
) => Paginator<ListExclusionsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput
>(InspectorClient, ListExclusionsCommand, "nextToken", "nextToken", "maxResults");
