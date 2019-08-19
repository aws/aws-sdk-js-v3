import { DeleteConnectorDefinitionInput } from "../shapes/DeleteConnectorDefinitionInput";
import { DeleteConnectorDefinitionOutput } from "../shapes/DeleteConnectorDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConnectorDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConnectorDefinition",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/definition/connectors/{ConnectorDefinitionId}"
  },
  input: {
    shape: DeleteConnectorDefinitionInput
  },
  output: {
    shape: DeleteConnectorDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
