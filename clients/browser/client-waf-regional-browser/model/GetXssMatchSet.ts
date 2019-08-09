import { GetXssMatchSetInput } from "./GetXssMatchSetInput";
import { GetXssMatchSetOutput } from "./GetXssMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetXssMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetXssMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetXssMatchSetInput
  },
  output: {
    shape: GetXssMatchSetOutput
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
