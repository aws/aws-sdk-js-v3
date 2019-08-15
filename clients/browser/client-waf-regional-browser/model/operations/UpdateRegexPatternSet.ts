import { UpdateRegexPatternSetInput } from "../shapes/UpdateRegexPatternSetInput";
import { UpdateRegexPatternSetOutput } from "../shapes/UpdateRegexPatternSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFNonexistentContainerException } from "../shapes/WAFNonexistentContainerException";
import { WAFInvalidOperationException } from "../shapes/WAFInvalidOperationException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidRegexPatternException } from "../shapes/WAFInvalidRegexPatternException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
