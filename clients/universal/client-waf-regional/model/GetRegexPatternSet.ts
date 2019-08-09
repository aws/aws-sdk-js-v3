import { GetRegexPatternSetInput } from "./GetRegexPatternSetInput";
import { GetRegexPatternSetOutput } from "./GetRegexPatternSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRegexPatternSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRegexPatternSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRegexPatternSetInput
  },
  output: {
    shape: GetRegexPatternSetOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
