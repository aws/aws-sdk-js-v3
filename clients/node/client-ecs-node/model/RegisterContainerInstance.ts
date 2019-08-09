import { RegisterContainerInstanceInput } from "./RegisterContainerInstanceInput";
import { RegisterContainerInstanceOutput } from "./RegisterContainerInstanceOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterContainerInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterContainerInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterContainerInstanceInput
  },
  output: {
    shape: RegisterContainerInstanceOutput
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
