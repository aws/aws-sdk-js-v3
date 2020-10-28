import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeartifactPaginationConfiguration extends PaginationConfiguration {
  client: Codeartifact | CodeartifactClient;
}
