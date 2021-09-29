import { Fis } from "../Fis";
import { FisClient } from "../FisClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface FisPaginationConfiguration extends PaginationConfiguration {
  client: Fis | FisClient;
}
