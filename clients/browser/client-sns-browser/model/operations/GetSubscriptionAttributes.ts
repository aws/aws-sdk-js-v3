import { GetSubscriptionAttributesInput } from "../shapes/GetSubscriptionAttributesInput";
import { GetSubscriptionAttributesOutput } from "../shapes/GetSubscriptionAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
