import { PutRetentionPolicyInput } from "../shapes/PutRetentionPolicyInput";
import { PutRetentionPolicyOutput } from "../shapes/PutRetentionPolicyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutRetentionPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRetentionPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRetentionPolicyInput
  },
  output: {
    shape: PutRetentionPolicyOutput
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
