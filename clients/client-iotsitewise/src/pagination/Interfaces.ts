import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTSiteWisePaginationConfiguration extends PaginationConfiguration {
  client: IoTSiteWise | IoTSiteWiseClient;
}
