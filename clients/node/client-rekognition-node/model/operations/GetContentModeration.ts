import { GetContentModerationInput } from "../shapes/GetContentModerationInput";
import { GetContentModerationOutput } from "../shapes/GetContentModerationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetContentModeration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContentModeration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetContentModerationInput
  },
  output: {
    shape: GetContentModerationOutput
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
