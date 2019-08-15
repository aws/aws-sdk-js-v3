import { GetResourcePolicyInput } from "../shapes/GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "../shapes/GetResourcePolicyOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourcePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourcePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResourcePolicyInput
  },
  output: {
    shape: GetResourcePolicyOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InvalidInputException
    }
  ]
};
