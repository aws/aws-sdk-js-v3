// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "../commands/ListEmailIdentitiesCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEmailIdentities: (
  config: PinpointEmailPaginationConfiguration,
  input: ListEmailIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListEmailIdentitiesCommandOutput> = createPaginator<
  PinpointEmailPaginationConfiguration,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput
>(PinpointEmailClient, ListEmailIdentitiesCommand, "NextToken", "NextToken", "PageSize");
