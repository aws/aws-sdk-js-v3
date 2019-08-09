import { GetUICustomizationInput } from "./GetUICustomizationInput";
import { GetUICustomizationOutput } from "./GetUICustomizationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUICustomization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUICustomization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUICustomizationInput
  },
  output: {
    shape: GetUICustomizationOutput
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
