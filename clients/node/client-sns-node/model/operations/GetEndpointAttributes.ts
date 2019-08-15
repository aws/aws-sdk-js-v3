import { GetEndpointAttributesInput } from "../shapes/GetEndpointAttributesInput";
import { GetEndpointAttributesOutput } from "../shapes/GetEndpointAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
