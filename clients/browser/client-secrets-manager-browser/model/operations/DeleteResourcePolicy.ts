import { DeleteResourcePolicyInput } from "../shapes/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "../shapes/DeleteResourcePolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
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
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
