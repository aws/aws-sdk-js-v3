import { SetUICustomizationInput } from "../shapes/SetUICustomizationInput";
import { SetUICustomizationOutput } from "../shapes/SetUICustomizationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetUICustomization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetUICustomization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetUICustomizationInput
  },
  output: {
    shape: SetUICustomizationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
