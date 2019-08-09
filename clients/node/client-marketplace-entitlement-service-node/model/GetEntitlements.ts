import { GetEntitlementsInput } from "./GetEntitlementsInput";
import { GetEntitlementsOutput } from "./GetEntitlementsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEntitlements: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEntitlements",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEntitlementsInput
  },
  output: {
    shape: GetEntitlementsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
