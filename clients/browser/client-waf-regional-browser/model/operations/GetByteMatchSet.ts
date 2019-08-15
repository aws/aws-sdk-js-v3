import { GetByteMatchSetInput } from "../shapes/GetByteMatchSetInput";
import { GetByteMatchSetOutput } from "../shapes/GetByteMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
