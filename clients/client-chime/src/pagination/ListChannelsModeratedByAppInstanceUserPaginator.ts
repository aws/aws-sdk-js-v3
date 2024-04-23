// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelsModeratedByAppInstanceUser: (
  config: ChimePaginationConfiguration,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsModeratedByAppInstanceUserCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput
>(ChimeClient, ListChannelsModeratedByAppInstanceUserCommand, "NextToken", "NextToken", "MaxResults");
