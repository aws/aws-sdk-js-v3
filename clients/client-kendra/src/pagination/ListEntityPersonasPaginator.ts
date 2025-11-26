// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntityPersonasCommand,
  ListEntityPersonasCommandInput,
  ListEntityPersonasCommandOutput,
} from "../commands/ListEntityPersonasCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntityPersonas: (
  config: KendraPaginationConfiguration,
  input: ListEntityPersonasCommandInput,
  ...rest: any[]
) => Paginator<ListEntityPersonasCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListEntityPersonasCommandInput,
  ListEntityPersonasCommandOutput
>(KendraClient, ListEntityPersonasCommand, "NextToken", "NextToken", "MaxResults");
