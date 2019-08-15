import { GetUploadStatusInput } from "../shapes/GetUploadStatusInput";
import { GetUploadStatusOutput } from "../shapes/GetUploadStatusOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
