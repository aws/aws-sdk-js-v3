import { GetCurrentMetricDataInput } from "../shapes/GetCurrentMetricDataInput";
import { GetCurrentMetricDataOutput } from "../shapes/GetCurrentMetricDataOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
