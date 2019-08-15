import { DeregisterTaskDefinitionInput } from "../shapes/DeregisterTaskDefinitionInput";
import { DeregisterTaskDefinitionOutput } from "../shapes/DeregisterTaskDefinitionOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterTaskDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterTaskDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterTaskDefinitionInput
  },
  output: {
    shape: DeregisterTaskDefinitionOutput
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
