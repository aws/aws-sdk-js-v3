import { PutResourcePolicyInput } from "../shapes/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "../shapes/PutResourcePolicyOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ConditionCheckFailureException } from "../shapes/ConditionCheckFailureException";
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
    },
    {
      shape: ConditionCheckFailureException
    }
  ]
};
