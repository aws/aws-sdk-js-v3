import { CreateRegexPatternSetInput } from "./CreateRegexPatternSetInput";
import { CreateRegexPatternSetOutput } from "./CreateRegexPatternSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateRegexPatternSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRegexPatternSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRegexPatternSetInput
  },
  output: {
    shape: CreateRegexPatternSetOutput
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
    }
  ]
};
