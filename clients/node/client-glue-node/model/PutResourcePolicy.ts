import { PutResourcePolicyInput } from "./PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "./PutResourcePolicyOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { ConditionCheckFailureException } from "./ConditionCheckFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
