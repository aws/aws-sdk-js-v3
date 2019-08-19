import { GetCelebrityRecognitionInput } from "../shapes/GetCelebrityRecognitionInput";
import { GetCelebrityRecognitionOutput } from "../shapes/GetCelebrityRecognitionOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCelebrityRecognition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCelebrityRecognition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCelebrityRecognitionInput
  },
  output: {
    shape: GetCelebrityRecognitionOutput
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
