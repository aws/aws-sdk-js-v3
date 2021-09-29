import { Ivs } from "../Ivs";
import { IvsClient } from "../IvsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IvsPaginationConfiguration extends PaginationConfiguration {
  client: Ivs | IvsClient;
}
