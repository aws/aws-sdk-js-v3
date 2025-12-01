// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactChannelsCommand,
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput,
} from "../commands/ListContactChannelsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactChannels: (
  config: SSMContactsPaginationConfiguration,
  input: ListContactChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListContactChannelsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput
>(SSMContactsClient, ListContactChannelsCommand, "NextToken", "NextToken", "MaxResults");
