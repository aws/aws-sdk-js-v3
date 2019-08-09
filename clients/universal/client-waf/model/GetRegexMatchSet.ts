import { GetRegexMatchSetInput } from "./GetRegexMatchSetInput";
import { GetRegexMatchSetOutput } from "./GetRegexMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRegexMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRegexMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRegexMatchSetInput
  },
  output: {
    shape: GetRegexMatchSetOutput
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
