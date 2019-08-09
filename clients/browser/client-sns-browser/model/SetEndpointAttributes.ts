import { SetEndpointAttributesInput } from "./SetEndpointAttributesInput";
import { SetEndpointAttributesOutput } from "./SetEndpointAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetEndpointAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetEndpointAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetEndpointAttributesInput
  },
  output: {
    shape: SetEndpointAttributesOutput
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
