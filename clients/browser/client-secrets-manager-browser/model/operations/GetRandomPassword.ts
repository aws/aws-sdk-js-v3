import { GetRandomPasswordInput } from "../shapes/GetRandomPasswordInput";
import { GetRandomPasswordOutput } from "../shapes/GetRandomPasswordOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRandomPassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRandomPassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRandomPasswordInput
  },
  output: {
    shape: GetRandomPasswordOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceError
    }
  ]
};
