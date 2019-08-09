import { DeleteResourcePolicyInput } from "./DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "./DeleteResourcePolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
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
