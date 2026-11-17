// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRemoteSourceActionInvocationsCommand,
  ListRemoteSourceActionInvocationsCommandInput,
  ListRemoteSourceActionInvocationsCommandOutput,
} from "../commands/ListRemoteSourceActionInvocationsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRemoteSourceActionInvocations: (
  config: MgnPaginationConfiguration,
  input: ListRemoteSourceActionInvocationsCommandInput,
  ...rest: any[]
) => Paginator<ListRemoteSourceActionInvocationsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListRemoteSourceActionInvocationsCommandInput,
  ListRemoteSourceActionInvocationsCommandOutput
>(MgnClient, ListRemoteSourceActionInvocationsCommand, "nextToken", "nextToken", "maxResults");
