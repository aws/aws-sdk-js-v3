// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListPolicyAttachmentsCommand,
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "../commands/ListPolicyAttachmentsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyAttachments: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListPolicyAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyAttachmentsCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput
>(CloudDirectoryClient, ListPolicyAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
