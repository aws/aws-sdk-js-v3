import { GetConnectorDefinitionVersionInput } from "./GetConnectorDefinitionVersionInput";
import { GetConnectorDefinitionVersionOutput } from "./GetConnectorDefinitionVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConnectorDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnectorDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}"
  },
  input: {
    shape: GetConnectorDefinitionVersionInput
  },
  output: {
    shape: GetConnectorDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
