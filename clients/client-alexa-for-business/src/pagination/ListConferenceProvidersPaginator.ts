// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListConferenceProvidersCommand,
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "../commands/ListConferenceProvidersCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConferenceProviders: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListConferenceProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListConferenceProvidersCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput
>(AlexaForBusinessClient, ListConferenceProvidersCommand, "NextToken", "NextToken", "MaxResults");
