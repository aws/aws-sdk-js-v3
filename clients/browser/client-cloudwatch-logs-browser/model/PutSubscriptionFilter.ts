import { PutSubscriptionFilterInput } from "./PutSubscriptionFilterInput";
import { PutSubscriptionFilterOutput } from "./PutSubscriptionFilterOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
