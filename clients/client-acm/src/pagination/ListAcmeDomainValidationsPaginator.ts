// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMClient } from "../ACMClient";
import {
  ListAcmeDomainValidationsCommand,
  ListAcmeDomainValidationsCommandInput,
  ListAcmeDomainValidationsCommandOutput,
} from "../commands/ListAcmeDomainValidationsCommand";
import type { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAcmeDomainValidations: (
  config: ACMPaginationConfiguration,
  input: ListAcmeDomainValidationsCommandInput,
  ...rest: any[]
) => Paginator<ListAcmeDomainValidationsCommandOutput> = createPaginator<
  ACMPaginationConfiguration,
  ListAcmeDomainValidationsCommandInput,
  ListAcmeDomainValidationsCommandOutput
>(ACMClient, ListAcmeDomainValidationsCommand, "NextToken", "NextToken", "MaxResults");
