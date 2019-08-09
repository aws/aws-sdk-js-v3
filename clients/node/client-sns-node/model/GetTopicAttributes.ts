import { GetTopicAttributesInput } from "./GetTopicAttributesInput";
import { GetTopicAttributesOutput } from "./GetTopicAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTopicAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTopicAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTopicAttributesInput
  },
  output: {
    shape: GetTopicAttributesOutput,
    resultWrapper: "GetTopicAttributesResult"
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
