import { CreateRegexPatternSetInput } from "../shapes/CreateRegexPatternSetInput";
import { CreateRegexPatternSetOutput } from "../shapes/CreateRegexPatternSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
