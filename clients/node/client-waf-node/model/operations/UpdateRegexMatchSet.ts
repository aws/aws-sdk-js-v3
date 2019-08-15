import { UpdateRegexMatchSetInput } from "../shapes/UpdateRegexMatchSetInput";
import { UpdateRegexMatchSetOutput } from "../shapes/UpdateRegexMatchSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFNonexistentContainerException } from "../shapes/WAFNonexistentContainerException";
import { WAFInvalidOperationException } from "../shapes/WAFInvalidOperationException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRegexMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRegexMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRegexMatchSetInput
  },
  output: {
    shape: UpdateRegexMatchSetOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFDisallowedNameException
    },
    {
      shape: WAFLimitsExceededException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFNonexistentContainerException
    },
    {
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFInvalidAccountException
    }
  ]
};
