// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopics: (
  config: SNSPaginationConfiguration,
  input: ListTopicsCommandInput,
  ...rest: any[]
) => Paginator<ListTopicsCommandOutput> = createPaginator<
  SNSPaginationConfiguration,
  ListTopicsCommandInput,
  ListTopicsCommandOutput
>(SNSClient, ListTopicsCommand, "NextToken", "NextToken", "");
