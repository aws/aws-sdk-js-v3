import { DescribeDetectorModelInput } from "./DescribeDetectorModelInput";
import { DescribeDetectorModelOutput } from "./DescribeDetectorModelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
