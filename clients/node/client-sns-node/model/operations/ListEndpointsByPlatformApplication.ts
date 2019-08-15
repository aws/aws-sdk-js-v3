import { ListEndpointsByPlatformApplicationInput } from "../shapes/ListEndpointsByPlatformApplicationInput";
import { ListEndpointsByPlatformApplicationOutput } from "../shapes/ListEndpointsByPlatformApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListEndpointsByPlatformApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEndpointsByPlatformApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEndpointsByPlatformApplicationInput
  },
  output: {
    shape: ListEndpointsByPlatformApplicationOutput,
    resultWrapper: "ListEndpointsByPlatformApplicationResult"
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
