import { GetXssMatchSetInput } from "../shapes/GetXssMatchSetInput";
import { GetXssMatchSetOutput } from "../shapes/GetXssMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
