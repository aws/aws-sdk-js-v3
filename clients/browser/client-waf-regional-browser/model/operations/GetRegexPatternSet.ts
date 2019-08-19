import { GetRegexPatternSetInput } from "../shapes/GetRegexPatternSetInput";
import { GetRegexPatternSetOutput } from "../shapes/GetRegexPatternSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
