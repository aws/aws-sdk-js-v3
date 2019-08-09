import { DescribeDocumentClassifierInput } from "./DescribeDocumentClassifierInput";
import { DescribeDocumentClassifierOutput } from "./DescribeDocumentClassifierOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
