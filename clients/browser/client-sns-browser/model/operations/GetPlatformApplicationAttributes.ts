import { GetPlatformApplicationAttributesInput } from "../shapes/GetPlatformApplicationAttributesInput";
import { GetPlatformApplicationAttributesOutput } from "../shapes/GetPlatformApplicationAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
