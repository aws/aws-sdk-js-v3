import { SetEndpointAttributesInput } from "../shapes/SetEndpointAttributesInput";
import { SetEndpointAttributesOutput } from "../shapes/SetEndpointAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
