import { CreateConnectorDefinitionVersionInput } from "./CreateConnectorDefinitionVersionInput";
import { CreateConnectorDefinitionVersionOutput } from "./CreateConnectorDefinitionVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConnectorDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConnectorDefinitionVersion",
  http: {
    method: "POST",
    requestUri:
      "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions"
  },
  input: {
    shape: CreateConnectorDefinitionVersionInput
  },
  output: {
    shape: CreateConnectorDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
