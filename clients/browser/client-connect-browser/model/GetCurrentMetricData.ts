import { GetCurrentMetricDataInput } from "./GetCurrentMetricDataInput";
import { GetCurrentMetricDataOutput } from "./GetCurrentMetricDataOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceException } from "./InternalServiceException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCurrentMetricData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCurrentMetricData",
  http: {
    method: "POST",
    requestUri: "/metrics/current/{InstanceId}"
  },
  input: {
    shape: GetCurrentMetricDataInput
  },
  output: {
    shape: GetCurrentMetricDataOutput
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
