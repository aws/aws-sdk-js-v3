// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMClient } from "../ACMClient";
import {
  ListAcmeExternalAccountBindingsCommand,
  ListAcmeExternalAccountBindingsCommandInput,
  ListAcmeExternalAccountBindingsCommandOutput,
} from "../commands/ListAcmeExternalAccountBindingsCommand";
import type { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAcmeExternalAccountBindings: (
  config: ACMPaginationConfiguration,
  input: ListAcmeExternalAccountBindingsCommandInput,
  ...rest: any[]
) => Paginator<ListAcmeExternalAccountBindingsCommandOutput> = createPaginator<
  ACMPaginationConfiguration,
  ListAcmeExternalAccountBindingsCommandInput,
  ListAcmeExternalAccountBindingsCommandOutput
>(ACMClient, ListAcmeExternalAccountBindingsCommand, "NextToken", "NextToken", "MaxResults");
