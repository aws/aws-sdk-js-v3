import { GetPlatformApplicationAttributesInput } from "./GetPlatformApplicationAttributesInput";
import { GetPlatformApplicationAttributesOutput } from "./GetPlatformApplicationAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPlatformApplicationAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPlatformApplicationAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPlatformApplicationAttributesInput
  },
  output: {
    shape: GetPlatformApplicationAttributesOutput,
    resultWrapper: "GetPlatformApplicationAttributesResult"
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
