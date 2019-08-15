import { GetFaceDetectionInput } from "../shapes/GetFaceDetectionInput";
import { GetFaceDetectionOutput } from "../shapes/GetFaceDetectionOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
