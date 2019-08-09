import { GetRandomPasswordInput } from "./GetRandomPasswordInput";
import { GetRandomPasswordOutput } from "./GetRandomPasswordOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
