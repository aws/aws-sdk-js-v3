// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrincipalsCommand,
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
} from "../commands/ListPrincipalsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrincipals: (
  config: RAMPaginationConfiguration,
  input: ListPrincipalsCommandInput,
  ...rest: any[]
) => Paginator<ListPrincipalsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput
>(RAMClient, ListPrincipalsCommand, "nextToken", "nextToken", "maxResults");
