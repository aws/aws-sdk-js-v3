import { GetFaceDetectionInput } from "./GetFaceDetectionInput";
import { GetFaceDetectionOutput } from "./GetFaceDetectionOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFaceDetection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFaceDetection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetFaceDetectionInput
  },
  output: {
    shape: GetFaceDetectionOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidPaginationTokenException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    }
  ]
};
