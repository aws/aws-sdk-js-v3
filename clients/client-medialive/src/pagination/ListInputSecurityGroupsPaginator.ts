// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInputSecurityGroupsCommand,
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "../commands/ListInputSecurityGroupsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInputSecurityGroups: (
  config: MediaLivePaginationConfiguration,
  input: ListInputSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListInputSecurityGroupsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput
>(MediaLiveClient, ListInputSecurityGroupsCommand, "NextToken", "NextToken", "MaxResults");
