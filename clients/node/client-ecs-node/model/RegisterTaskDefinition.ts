import { RegisterTaskDefinitionInput } from "./RegisterTaskDefinitionInput";
import { RegisterTaskDefinitionOutput } from "./RegisterTaskDefinitionOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterTaskDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterTaskDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterTaskDefinitionInput
  },
  output: {
    shape: RegisterTaskDefinitionOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
