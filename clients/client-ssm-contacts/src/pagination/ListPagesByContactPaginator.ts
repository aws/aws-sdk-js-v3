// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPagesByContactCommand,
  ListPagesByContactCommandInput,
  ListPagesByContactCommandOutput,
} from "../commands/ListPagesByContactCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPagesByContact: (
  config: SSMContactsPaginationConfiguration,
  input: ListPagesByContactCommandInput,
  ...rest: any[]
) => Paginator<ListPagesByContactCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListPagesByContactCommandInput,
  ListPagesByContactCommandOutput
>(SSMContactsClient, ListPagesByContactCommand, "NextToken", "NextToken", "MaxResults");
