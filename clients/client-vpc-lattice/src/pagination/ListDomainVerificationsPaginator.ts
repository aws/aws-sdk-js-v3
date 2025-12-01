// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainVerificationsCommand,
  ListDomainVerificationsCommandInput,
  ListDomainVerificationsCommandOutput,
} from "../commands/ListDomainVerificationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainVerifications: (
  config: VPCLatticePaginationConfiguration,
  input: ListDomainVerificationsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainVerificationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListDomainVerificationsCommandInput,
  ListDomainVerificationsCommandOutput
>(VPCLatticeClient, ListDomainVerificationsCommand, "nextToken", "nextToken", "maxResults");
