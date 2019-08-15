import { PutSubscriptionFilterInput } from "../shapes/PutSubscriptionFilterInput";
import { PutSubscriptionFilterOutput } from "../shapes/PutSubscriptionFilterOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutSubscriptionFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutSubscriptionFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutSubscriptionFilterInput
  },
  output: {
    shape: PutSubscriptionFilterOutput
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
      shape: LimitExceededException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
