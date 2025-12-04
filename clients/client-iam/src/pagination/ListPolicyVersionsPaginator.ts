// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "../commands/ListPolicyVersionsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyVersions: (
  config: IAMPaginationConfiguration,
  input: ListPolicyVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyVersionsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput
>(IAMClient, ListPolicyVersionsCommand, "Marker", "Marker", "MaxItems");
