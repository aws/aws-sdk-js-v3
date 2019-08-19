import { DescribeDocumentClassificationJobInput } from "../shapes/DescribeDocumentClassificationJobInput";
import { DescribeDocumentClassificationJobOutput } from "../shapes/DescribeDocumentClassificationJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDocumentClassificationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDocumentClassificationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDocumentClassificationJobInput
  },
  output: {
    shape: DescribeDocumentClassificationJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
