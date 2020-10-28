import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AlexaForBusinessPaginationConfiguration extends PaginationConfiguration {
  client: AlexaForBusiness | AlexaForBusinessClient;
}
