import { GetTopicAttributesInput } from "../shapes/GetTopicAttributesInput";
import { GetTopicAttributesOutput } from "../shapes/GetTopicAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidSecurityException } from "../shapes/InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
