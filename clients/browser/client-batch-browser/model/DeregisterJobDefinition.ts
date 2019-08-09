import { DeregisterJobDefinitionInput } from "./DeregisterJobDefinitionInput";
import { DeregisterJobDefinitionOutput } from "./DeregisterJobDefinitionOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterJobDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterJobDefinition",
  http: {
    method: "POST",
    requestUri: "/v1/deregisterjobdefinition"
  },
  input: {
    shape: DeregisterJobDefinitionInput
  },
  output: {
    shape: DeregisterJobDefinitionOutput
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
