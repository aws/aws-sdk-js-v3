import { GetResourcePolicyInput } from "../shapes/GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "../shapes/GetResourcePolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
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
