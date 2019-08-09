import { GetByteMatchSetInput } from "./GetByteMatchSetInput";
import { GetByteMatchSetOutput } from "./GetByteMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetByteMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetByteMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetByteMatchSetInput
  },
  output: {
    shape: GetByteMatchSetOutput
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
