// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";

export interface ChimeSDKMessagingPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKMessaging | ChimeSDKMessagingClient;
}
