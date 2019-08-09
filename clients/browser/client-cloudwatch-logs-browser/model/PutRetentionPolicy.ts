import { PutRetentionPolicyInput } from "./PutRetentionPolicyInput";
import { PutRetentionPolicyOutput } from "./PutRetentionPolicyOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
