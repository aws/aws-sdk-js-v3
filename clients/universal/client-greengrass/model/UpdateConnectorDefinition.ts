import { UpdateConnectorDefinitionInput } from "./UpdateConnectorDefinitionInput";
import { UpdateConnectorDefinitionOutput } from "./UpdateConnectorDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateConnectorDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConnectorDefinition",
  http: {
    method: "PUT",
    requestUri: "/greengrass/definition/connectors/{ConnectorDefinitionId}"
  },
  input: {
    shape: UpdateConnectorDefinitionInput
  },
  output: {
    shape: UpdateConnectorDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
