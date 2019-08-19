import { GetConnectorDefinitionInput } from "../shapes/GetConnectorDefinitionInput";
import { GetConnectorDefinitionOutput } from "../shapes/GetConnectorDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConnectorDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConnectorDefinition",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/connectors/{ConnectorDefinitionId}"
  },
  input: {
    shape: GetConnectorDefinitionInput
  },
  output: {
    shape: GetConnectorDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
