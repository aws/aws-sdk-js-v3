// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRLSPolicyAttachmentsCommand,
  ListRLSPolicyAttachmentsCommandInput,
  ListRLSPolicyAttachmentsCommandOutput,
} from "../commands/ListRLSPolicyAttachmentsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import type { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRLSPolicyAttachments: (
  config: LakeFormationPaginationConfiguration,
  input: ListRLSPolicyAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<ListRLSPolicyAttachmentsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListRLSPolicyAttachmentsCommandInput,
  ListRLSPolicyAttachmentsCommandOutput
>(LakeFormationClient, ListRLSPolicyAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
