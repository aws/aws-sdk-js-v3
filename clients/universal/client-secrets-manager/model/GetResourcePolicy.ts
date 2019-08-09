import { GetResourcePolicyInput } from "./GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "./GetResourcePolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
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
