import { SetTopicAttributesInput } from "./SetTopicAttributesInput";
import { SetTopicAttributesOutput } from "./SetTopicAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
