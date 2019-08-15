import { GetJobDocumentInput } from "../shapes/GetJobDocumentInput";
import { GetJobDocumentOutput } from "../shapes/GetJobDocumentOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
