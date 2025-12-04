// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectPoliciesCommand,
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
} from "../commands/ListProjectPoliciesCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjectPolicies: (
  config: RekognitionPaginationConfiguration,
  input: ListProjectPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListProjectPoliciesCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput
>(RekognitionClient, ListProjectPoliciesCommand, "NextToken", "NextToken", "MaxResults");
