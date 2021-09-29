import { SSMContacts } from "../SSMContacts";
import { SSMContactsClient } from "../SSMContactsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SSMContactsPaginationConfiguration extends PaginationConfiguration {
  client: SSMContacts | SSMContactsClient;
}
