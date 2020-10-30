import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaConnectPaginationConfiguration extends PaginationConfiguration {
  client: MediaConnect | MediaConnectClient;
}
