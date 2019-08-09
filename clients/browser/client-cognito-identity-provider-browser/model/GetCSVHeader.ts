import { GetCSVHeaderInput } from "./GetCSVHeaderInput";
import { GetCSVHeaderOutput } from "./GetCSVHeaderOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCSVHeader: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCSVHeader",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCSVHeaderInput
  },
  output: {
    shape: GetCSVHeaderOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
