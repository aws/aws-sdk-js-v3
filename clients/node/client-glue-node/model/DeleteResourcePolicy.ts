import { DeleteResourcePolicyInput } from "./DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "./DeleteResourcePolicyOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { ConditionCheckFailureException } from "./ConditionCheckFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
