// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "../commands/ListLifecyclePoliciesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLifecyclePolicies: (
  config: ImagebuilderPaginationConfiguration,
  input: ListLifecyclePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListLifecyclePoliciesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput
>(ImagebuilderClient, ListLifecyclePoliciesCommand, "nextToken", "nextToken", "maxResults");
