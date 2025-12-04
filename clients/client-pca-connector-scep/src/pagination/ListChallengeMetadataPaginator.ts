// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChallengeMetadataCommand,
  ListChallengeMetadataCommandInput,
  ListChallengeMetadataCommandOutput,
} from "../commands/ListChallengeMetadataCommand";
import { PcaConnectorScepClient } from "../PcaConnectorScepClient";
import { PcaConnectorScepPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChallengeMetadata: (
  config: PcaConnectorScepPaginationConfiguration,
  input: ListChallengeMetadataCommandInput,
  ...rest: any[]
) => Paginator<ListChallengeMetadataCommandOutput> = createPaginator<
  PcaConnectorScepPaginationConfiguration,
  ListChallengeMetadataCommandInput,
  ListChallengeMetadataCommandOutput
>(PcaConnectorScepClient, ListChallengeMetadataCommand, "NextToken", "NextToken", "MaxResults");
