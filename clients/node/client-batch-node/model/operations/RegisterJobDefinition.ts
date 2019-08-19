import { RegisterJobDefinitionInput } from "../shapes/RegisterJobDefinitionInput";
import { RegisterJobDefinitionOutput } from "../shapes/RegisterJobDefinitionOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterJobDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterJobDefinition",
  http: {
    method: "POST",
    requestUri: "/v1/registerjobdefinition"
  },
  input: {
    shape: RegisterJobDefinitionInput
  },
  output: {
    shape: RegisterJobDefinitionOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
