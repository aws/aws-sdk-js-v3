import { ListDocumentClassificationJobsInput } from "../shapes/ListDocumentClassificationJobsInput";
import { ListDocumentClassificationJobsOutput } from "../shapes/ListDocumentClassificationJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDocumentClassificationJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDocumentClassificationJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDocumentClassificationJobsInput
  },
  output: {
    shape: ListDocumentClassificationJobsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidFilterException
    },
    {
      shape: InternalServerException
    }
  ]
};
