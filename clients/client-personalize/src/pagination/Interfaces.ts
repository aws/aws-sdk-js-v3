import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface PersonalizePaginationConfiguration extends PaginationConfiguration {
  client: Personalize | PersonalizeClient;
}
