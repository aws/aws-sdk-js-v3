// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAttachmentRoutingPolicyAssociationsCommand,
  ListAttachmentRoutingPolicyAssociationsCommandInput,
  ListAttachmentRoutingPolicyAssociationsCommandOutput,
} from "../commands/ListAttachmentRoutingPolicyAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachmentRoutingPolicyAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: ListAttachmentRoutingPolicyAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAttachmentRoutingPolicyAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListAttachmentRoutingPolicyAssociationsCommandInput,
  ListAttachmentRoutingPolicyAssociationsCommandOutput
>(NetworkManagerClient, ListAttachmentRoutingPolicyAssociationsCommand, "NextToken", "NextToken", "MaxResults");
