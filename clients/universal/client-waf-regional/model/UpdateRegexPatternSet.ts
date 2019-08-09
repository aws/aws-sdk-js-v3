import { UpdateRegexPatternSetInput } from "./UpdateRegexPatternSetInput";
import { UpdateRegexPatternSetOutput } from "./UpdateRegexPatternSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidRegexPatternException } from "./WAFInvalidRegexPatternException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRegexPatternSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRegexPatternSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRegexPatternSetInput
  },
  output: {
    shape: UpdateRegexPatternSetOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
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
    },
    {
      shape: WAFInvalidRegexPatternException
    }
  ]
};
