// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";

export interface AlexaForBusinessPaginationConfiguration extends PaginationConfiguration {
  client: AlexaForBusiness | AlexaForBusinessClient;
}
