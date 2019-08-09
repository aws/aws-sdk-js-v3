import { GetResourcePolicyInput } from "./GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "./GetResourcePolicyOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
