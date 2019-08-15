import { DescribeDocumentClassifierInput } from "../shapes/DescribeDocumentClassifierInput";
import { DescribeDocumentClassifierOutput } from "../shapes/DescribeDocumentClassifierOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDocumentClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDocumentClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDocumentClassifierInput
  },
  output: {
    shape: DescribeDocumentClassifierOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
