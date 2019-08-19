import { GetRegexMatchSetInput } from "../shapes/GetRegexMatchSetInput";
import { GetRegexMatchSetOutput } from "../shapes/GetRegexMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
