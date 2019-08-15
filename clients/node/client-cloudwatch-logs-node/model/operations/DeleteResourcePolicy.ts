import { DeleteResourcePolicyInput } from "../shapes/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "../shapes/DeleteResourcePolicyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
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
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
