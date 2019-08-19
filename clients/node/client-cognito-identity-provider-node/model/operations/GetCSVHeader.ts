import { GetCSVHeaderInput } from "../shapes/GetCSVHeaderInput";
import { GetCSVHeaderOutput } from "../shapes/GetCSVHeaderOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
