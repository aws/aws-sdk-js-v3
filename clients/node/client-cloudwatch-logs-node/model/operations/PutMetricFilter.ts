import { PutMetricFilterInput } from "../shapes/PutMetricFilterInput";
import { PutMetricFilterOutput } from "../shapes/PutMetricFilterOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
