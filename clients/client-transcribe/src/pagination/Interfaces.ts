import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface TranscribePaginationConfiguration extends PaginationConfiguration {
  client: Transcribe | TranscribeClient;
}
