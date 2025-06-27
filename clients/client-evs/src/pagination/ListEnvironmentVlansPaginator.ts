// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEnvironmentVlansCommand,
  ListEnvironmentVlansCommandInput,
  ListEnvironmentVlansCommandOutput,
} from "../commands/ListEnvironmentVlansCommand";
import { EvsClient } from "../EvsClient";
import { EvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentVlans: (
  config: EvsPaginationConfiguration,
  input: ListEnvironmentVlansCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentVlansCommandOutput> = createPaginator<
  EvsPaginationConfiguration,
  ListEnvironmentVlansCommandInput,
  ListEnvironmentVlansCommandOutput
>(EvsClient, ListEnvironmentVlansCommand, "nextToken", "nextToken", "maxResults");
