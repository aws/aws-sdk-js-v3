// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdentitiesCommand,
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "../commands/ListIdentitiesCommand";
import { SESClient } from "../SESClient";
import { SESPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentities: (
  config: SESPaginationConfiguration,
  input: ListIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListIdentitiesCommandOutput> = createPaginator<
  SESPaginationConfiguration,
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput
>(SESClient, ListIdentitiesCommand, "NextToken", "NextToken", "MaxItems");
