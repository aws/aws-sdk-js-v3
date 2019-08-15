import { CreateConnectorDefinitionInput } from "../shapes/CreateConnectorDefinitionInput";
import { CreateConnectorDefinitionOutput } from "../shapes/CreateConnectorDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConnectorDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConnectorDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/connectors"
  },
  input: {
    shape: CreateConnectorDefinitionInput
  },
  output: {
    shape: CreateConnectorDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
