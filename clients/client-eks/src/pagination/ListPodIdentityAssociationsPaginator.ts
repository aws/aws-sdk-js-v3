// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPodIdentityAssociationsCommand,
  ListPodIdentityAssociationsCommandInput,
  ListPodIdentityAssociationsCommandOutput,
} from "../commands/ListPodIdentityAssociationsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPodIdentityAssociations: (
  config: EKSPaginationConfiguration,
  input: ListPodIdentityAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListPodIdentityAssociationsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListPodIdentityAssociationsCommandInput,
  ListPodIdentityAssociationsCommandOutput
>(EKSClient, ListPodIdentityAssociationsCommand, "nextToken", "nextToken", "maxResults");
