// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";

export interface TranscribePaginationConfiguration extends PaginationConfiguration {
  client: Transcribe | TranscribeClient;
}
