import { UntagResourceInput } from "./UntagResourceInput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFBadRequestException } from "./WAFBadRequestException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidParameterException
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
