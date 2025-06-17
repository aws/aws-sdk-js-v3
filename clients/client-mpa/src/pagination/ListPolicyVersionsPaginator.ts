// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "../commands/ListPolicyVersionsCommand";
import { MPAClient } from "../MPAClient";
import { MPAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyVersions: (
  config: MPAPaginationConfiguration,
  input: ListPolicyVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyVersionsCommandOutput> = createPaginator<
  MPAPaginationConfiguration,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput
>(MPAClient, ListPolicyVersionsCommand, "NextToken", "NextToken", "MaxResults");
