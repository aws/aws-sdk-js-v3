import { PutResourcePolicyInput } from "../shapes/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "../shapes/PutResourcePolicyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutResourcePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutResourcePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutResourcePolicyInput
  },
  output: {
    shape: PutResourcePolicyOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
