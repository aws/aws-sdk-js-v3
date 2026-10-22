// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachmentNatConfigurationsCommand,
  ListAttachmentNatConfigurationsCommandInput,
  ListAttachmentNatConfigurationsCommandOutput,
} from "../commands/ListAttachmentNatConfigurationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import type { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachmentNatConfigurations: (
  config: NetworkManagerPaginationConfiguration,
  input: ListAttachmentNatConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListAttachmentNatConfigurationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListAttachmentNatConfigurationsCommandInput,
  ListAttachmentNatConfigurationsCommandOutput
>(NetworkManagerClient, ListAttachmentNatConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
