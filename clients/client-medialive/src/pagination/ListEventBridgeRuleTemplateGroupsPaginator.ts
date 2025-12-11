// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventBridgeRuleTemplateGroupsCommand,
  ListEventBridgeRuleTemplateGroupsCommandInput,
  ListEventBridgeRuleTemplateGroupsCommandOutput,
} from "../commands/ListEventBridgeRuleTemplateGroupsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventBridgeRuleTemplateGroups: (
  config: MediaLivePaginationConfiguration,
  input: ListEventBridgeRuleTemplateGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListEventBridgeRuleTemplateGroupsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListEventBridgeRuleTemplateGroupsCommandInput,
  ListEventBridgeRuleTemplateGroupsCommandOutput
>(MediaLiveClient, ListEventBridgeRuleTemplateGroupsCommand, "NextToken", "NextToken", "MaxResults");
