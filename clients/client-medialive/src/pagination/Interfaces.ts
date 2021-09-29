import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaLivePaginationConfiguration extends PaginationConfiguration {
  client: MediaLive | MediaLiveClient;
}
