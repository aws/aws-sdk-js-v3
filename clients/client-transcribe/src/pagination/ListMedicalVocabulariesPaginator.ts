// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMedicalVocabulariesCommand,
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "../commands/ListMedicalVocabulariesCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMedicalVocabularies: (
  config: TranscribePaginationConfiguration,
  input: ListMedicalVocabulariesCommandInput,
  ...rest: any[]
) => Paginator<ListMedicalVocabulariesCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput
>(TranscribeClient, ListMedicalVocabulariesCommand, "NextToken", "NextToken", "MaxResults");
