import { GetEntitlementsInput } from "../shapes/GetEntitlementsInput";
import { GetEntitlementsOutput } from "../shapes/GetEntitlementsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
