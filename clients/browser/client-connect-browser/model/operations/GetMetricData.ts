import { GetMetricDataInput } from "../shapes/GetMetricDataInput";
import { GetMetricDataOutput } from "../shapes/GetMetricDataOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
