import { ListConnectorDefinitionVersionsInput } from "./ListConnectorDefinitionVersionsInput";
import { ListConnectorDefinitionVersionsOutput } from "./ListConnectorDefinitionVersionsOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListConnectorDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConnectorDefinitionVersions",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions"
  },
  input: {
    shape: ListConnectorDefinitionVersionsInput
  },
  output: {
    shape: ListConnectorDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
