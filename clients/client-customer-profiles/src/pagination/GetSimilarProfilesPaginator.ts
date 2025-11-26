// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSimilarProfilesCommand,
  GetSimilarProfilesCommandInput,
  GetSimilarProfilesCommandOutput,
} from "../commands/GetSimilarProfilesCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSimilarProfiles: (
  config: CustomerProfilesPaginationConfiguration,
  input: GetSimilarProfilesCommandInput,
  ...rest: any[]
) => Paginator<GetSimilarProfilesCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  GetSimilarProfilesCommandInput,
  GetSimilarProfilesCommandOutput
>(CustomerProfilesClient, GetSimilarProfilesCommand, "NextToken", "NextToken", "MaxResults");
