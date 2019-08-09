import { ListDocumentClassificationJobsInput } from "./ListDocumentClassificationJobsInput";
import { ListDocumentClassificationJobsOutput } from "./ListDocumentClassificationJobsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
