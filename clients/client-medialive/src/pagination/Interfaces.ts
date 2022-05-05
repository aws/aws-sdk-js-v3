// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";

export interface MediaLivePaginationConfiguration extends PaginationConfiguration {
  client: MediaLive | MediaLiveClient;
}
