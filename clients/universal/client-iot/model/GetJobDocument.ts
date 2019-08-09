import { GetJobDocumentInput } from "./GetJobDocumentInput";
import { GetJobDocumentOutput } from "./GetJobDocumentOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJobDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobDocument",
  http: {
    method: "GET",
    requestUri: "/jobs/{jobId}/job-document"
  },
  input: {
    shape: GetJobDocumentInput
  },
  output: {
    shape: GetJobDocumentOutput
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
      shape: ServiceUnavailableException
    }
  ]
};
