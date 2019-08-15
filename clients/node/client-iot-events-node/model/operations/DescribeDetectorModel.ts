import { DescribeDetectorModelInput } from "../shapes/DescribeDetectorModelInput";
import { DescribeDetectorModelOutput } from "../shapes/DescribeDetectorModelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDetectorModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDetectorModel",
  http: {
    method: "GET",
    requestUri: "/detector-models/{detectorModelName}"
  },
  input: {
    shape: DescribeDetectorModelInput
  },
  output: {
    shape: DescribeDetectorModelOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
