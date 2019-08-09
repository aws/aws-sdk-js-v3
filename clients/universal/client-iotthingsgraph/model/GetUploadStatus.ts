import { GetUploadStatusInput } from "./GetUploadStatusInput";
import { GetUploadStatusOutput } from "./GetUploadStatusOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUploadStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUploadStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUploadStatusInput
  },
  output: {
    shape: GetUploadStatusOutput
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
      shape: ThrottlingException
    }
  ]
};
