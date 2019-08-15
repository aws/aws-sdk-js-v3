import { DescribeDetectorInput } from "../shapes/DescribeDetectorInput";
import { DescribeDetectorOutput } from "../shapes/DescribeDetectorOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDetector",
  http: {
    method: "GET",
    requestUri: "/detectors/{detectorModelName}/keyValues/"
  },
  input: {
    shape: DescribeDetectorInput
  },
  output: {
    shape: DescribeDetectorOutput
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
