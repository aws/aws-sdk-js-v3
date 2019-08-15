import { DeleteResourcePolicyInput } from "../shapes/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "../shapes/DeleteResourcePolicyOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ConditionCheckFailureException } from "../shapes/ConditionCheckFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResourcePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResourcePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteResourcePolicyInput
  },
  output: {
    shape: DeleteResourcePolicyOutput
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
