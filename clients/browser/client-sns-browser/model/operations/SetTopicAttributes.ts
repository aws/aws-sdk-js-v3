import { SetTopicAttributesInput } from "../shapes/SetTopicAttributesInput";
import { SetTopicAttributesOutput } from "../shapes/SetTopicAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidSecurityException } from "../shapes/InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetTopicAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetTopicAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetTopicAttributesInput
  },
  output: {
    shape: SetTopicAttributesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidSecurityException
    }
  ]
};
