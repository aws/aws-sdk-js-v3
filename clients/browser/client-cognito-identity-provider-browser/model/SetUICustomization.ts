import { SetUICustomizationInput } from "./SetUICustomizationInput";
import { SetUICustomizationOutput } from "./SetUICustomizationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
