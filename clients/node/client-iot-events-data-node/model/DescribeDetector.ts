import { DescribeDetectorInput } from "./DescribeDetectorInput";
import { DescribeDetectorOutput } from "./DescribeDetectorOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
