import { PutMetricFilterInput } from "./PutMetricFilterInput";
import { PutMetricFilterOutput } from "./PutMetricFilterOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutMetricFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutMetricFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutMetricFilterInput
  },
  output: {
    shape: PutMetricFilterOutput
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
