import { DescribeDatasetInput } from "../shapes/DescribeDatasetInput";
import { DescribeDatasetOutput } from "../shapes/DescribeDatasetOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDataset",
  http: {
    method: "GET",
    requestUri: "/datasets/{datasetName}"
  },
  input: {
    shape: DescribeDatasetInput
  },
  output: {
    shape: DescribeDatasetOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
