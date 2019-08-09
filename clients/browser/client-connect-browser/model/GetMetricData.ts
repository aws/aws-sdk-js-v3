import { GetMetricDataInput } from "./GetMetricDataInput";
import { GetMetricDataOutput } from "./GetMetricDataOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceException } from "./InternalServiceException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMetricData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMetricData",
  http: {
    method: "POST",
    requestUri: "/metrics/historical/{InstanceId}"
  },
  input: {
    shape: GetMetricDataInput
  },
  output: {
    shape: GetMetricDataOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
