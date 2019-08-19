import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFBadRequestException } from "../shapes/WAFBadRequestException";
import { WAFTagOperationException } from "../shapes/WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "../shapes/WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFLimitsExceededException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFBadRequestException
    },
    {
      shape: WAFTagOperationException
    },
    {
      shape: WAFTagOperationInternalErrorException
    }
  ]
};
