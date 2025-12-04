// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlaybackRestrictionPoliciesCommand,
  ListPlaybackRestrictionPoliciesCommandInput,
  ListPlaybackRestrictionPoliciesCommandOutput,
} from "../commands/ListPlaybackRestrictionPoliciesCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlaybackRestrictionPolicies: (
  config: IvsPaginationConfiguration,
  input: ListPlaybackRestrictionPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPlaybackRestrictionPoliciesCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListPlaybackRestrictionPoliciesCommandInput,
  ListPlaybackRestrictionPoliciesCommandOutput
>(IvsClient, ListPlaybackRestrictionPoliciesCommand, "nextToken", "nextToken", "maxResults");
