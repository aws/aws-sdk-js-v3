import { UpdateRegexMatchSetInput } from "./UpdateRegexMatchSetInput";
import { UpdateRegexMatchSetOutput } from "./UpdateRegexMatchSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
