import { GetAuthorizationTokenInput } from "../shapes/GetAuthorizationTokenInput";
import { GetAuthorizationTokenOutput } from "../shapes/GetAuthorizationTokenOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAuthorizationToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAuthorizationToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAuthorizationTokenInput
  },
  output: {
    shape: GetAuthorizationTokenOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
