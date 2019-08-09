import { GetEndpointAttributesInput } from "./GetEndpointAttributesInput";
import { GetEndpointAttributesOutput } from "./GetEndpointAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEndpointAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEndpointAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEndpointAttributesInput
  },
  output: {
    shape: GetEndpointAttributesOutput,
    resultWrapper: "GetEndpointAttributesResult"
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
