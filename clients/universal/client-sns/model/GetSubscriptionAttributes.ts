import { GetSubscriptionAttributesInput } from "./GetSubscriptionAttributesInput";
import { GetSubscriptionAttributesOutput } from "./GetSubscriptionAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSubscriptionAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSubscriptionAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSubscriptionAttributesInput
  },
  output: {
    shape: GetSubscriptionAttributesOutput,
    resultWrapper: "GetSubscriptionAttributesResult"
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
    }
  ]
};
