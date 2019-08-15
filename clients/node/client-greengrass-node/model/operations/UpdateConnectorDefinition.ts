import { UpdateConnectorDefinitionInput } from "../shapes/UpdateConnectorDefinitionInput";
import { UpdateConnectorDefinitionOutput } from "../shapes/UpdateConnectorDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
