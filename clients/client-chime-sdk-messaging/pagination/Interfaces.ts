import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ChimeSDKMessagingPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKMessaging | ChimeSDKMessagingClient;
}
