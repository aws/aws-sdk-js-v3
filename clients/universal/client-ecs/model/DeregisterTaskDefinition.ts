import { DeregisterTaskDefinitionInput } from "./DeregisterTaskDefinitionInput";
import { DeregisterTaskDefinitionOutput } from "./DeregisterTaskDefinitionOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
