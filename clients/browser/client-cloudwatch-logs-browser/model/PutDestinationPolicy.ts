import { PutDestinationPolicyInput } from "./PutDestinationPolicyInput";
import { PutDestinationPolicyOutput } from "./PutDestinationPolicyOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutDestinationPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDestinationPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutDestinationPolicyInput
  },
  output: {
    shape: PutDestinationPolicyOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
