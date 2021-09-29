import { WorkLink } from "../WorkLink";
import { WorkLinkClient } from "../WorkLinkClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface WorkLinkPaginationConfiguration extends PaginationConfiguration {
  client: WorkLink | WorkLinkClient;
}
