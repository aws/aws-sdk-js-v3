import { RegisterJobDefinitionInput } from "./RegisterJobDefinitionInput";
import { RegisterJobDefinitionOutput } from "./RegisterJobDefinitionOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
