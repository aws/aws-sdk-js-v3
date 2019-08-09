import { CreatePlatformEndpointInput } from "./CreatePlatformEndpointInput";
import { CreatePlatformEndpointOutput } from "./CreatePlatformEndpointOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePlatformEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlatformEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePlatformEndpointInput
  },
  output: {
    shape: CreatePlatformEndpointOutput,
    resultWrapper: "CreatePlatformEndpointResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: NotFoundException
    }
  ]
};
