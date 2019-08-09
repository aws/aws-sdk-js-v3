import { DeleteRetentionPolicyInput } from "./DeleteRetentionPolicyInput";
import { DeleteRetentionPolicyOutput } from "./DeleteRetentionPolicyOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
