// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRotationOverridesCommand,
  ListRotationOverridesCommandInput,
  ListRotationOverridesCommandOutput,
} from "../commands/ListRotationOverridesCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRotationOverrides: (
  config: SSMContactsPaginationConfiguration,
  input: ListRotationOverridesCommandInput,
  ...rest: any[]
) => Paginator<ListRotationOverridesCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListRotationOverridesCommandInput,
  ListRotationOverridesCommandOutput
>(SSMContactsClient, ListRotationOverridesCommand, "NextToken", "NextToken", "MaxResults");
