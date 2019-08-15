import { PutDestinationPolicyInput } from "../shapes/PutDestinationPolicyInput";
import { PutDestinationPolicyOutput } from "../shapes/PutDestinationPolicyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
