import { RegisterTaskDefinitionInput } from "../shapes/RegisterTaskDefinitionInput";
import { RegisterTaskDefinitionOutput } from "../shapes/RegisterTaskDefinitionOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
