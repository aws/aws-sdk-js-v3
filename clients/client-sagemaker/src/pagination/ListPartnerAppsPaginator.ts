// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPartnerAppsCommand,
  ListPartnerAppsCommandInput,
  ListPartnerAppsCommandOutput,
} from "../commands/ListPartnerAppsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPartnerApps: (
  config: SageMakerPaginationConfiguration,
  input: ListPartnerAppsCommandInput,
  ...rest: any[]
) => Paginator<ListPartnerAppsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListPartnerAppsCommandInput,
  ListPartnerAppsCommandOutput
>(SageMakerClient, ListPartnerAppsCommand, "NextToken", "NextToken", "MaxResults");
