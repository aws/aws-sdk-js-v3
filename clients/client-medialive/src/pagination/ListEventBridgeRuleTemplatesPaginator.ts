// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventBridgeRuleTemplatesCommand,
  ListEventBridgeRuleTemplatesCommandInput,
  ListEventBridgeRuleTemplatesCommandOutput,
} from "../commands/ListEventBridgeRuleTemplatesCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventBridgeRuleTemplates: (
  config: MediaLivePaginationConfiguration,
  input: ListEventBridgeRuleTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListEventBridgeRuleTemplatesCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListEventBridgeRuleTemplatesCommandInput,
  ListEventBridgeRuleTemplatesCommandOutput
>(MediaLiveClient, ListEventBridgeRuleTemplatesCommand, "NextToken", "NextToken", "MaxResults");
