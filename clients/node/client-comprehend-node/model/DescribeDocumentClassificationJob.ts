import { DescribeDocumentClassificationJobInput } from "./DescribeDocumentClassificationJobInput";
import { DescribeDocumentClassificationJobOutput } from "./DescribeDocumentClassificationJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
