// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRotationsCommand,
  ListRotationsCommandInput,
  ListRotationsCommandOutput,
} from "../commands/ListRotationsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRotations: (
  config: SSMContactsPaginationConfiguration,
  input: ListRotationsCommandInput,
  ...rest: any[]
) => Paginator<ListRotationsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListRotationsCommandInput,
  ListRotationsCommandOutput
>(SSMContactsClient, ListRotationsCommand, "NextToken", "NextToken", "MaxResults");
