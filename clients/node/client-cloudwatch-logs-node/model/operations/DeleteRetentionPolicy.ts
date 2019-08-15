import { DeleteRetentionPolicyInput } from "../shapes/DeleteRetentionPolicyInput";
import { DeleteRetentionPolicyOutput } from "../shapes/DeleteRetentionPolicyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRetentionPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRetentionPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRetentionPolicyInput
  },
  output: {
    shape: DeleteRetentionPolicyOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
