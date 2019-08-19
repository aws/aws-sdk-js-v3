import { RegisterContainerInstanceInput } from "../shapes/RegisterContainerInstanceInput";
import { RegisterContainerInstanceOutput } from "../shapes/RegisterContainerInstanceOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
