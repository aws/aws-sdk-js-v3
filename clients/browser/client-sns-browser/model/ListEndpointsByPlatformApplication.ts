import { ListEndpointsByPlatformApplicationInput } from "./ListEndpointsByPlatformApplicationInput";
import { ListEndpointsByPlatformApplicationOutput } from "./ListEndpointsByPlatformApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
