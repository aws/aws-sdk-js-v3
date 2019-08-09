import { GetIPSetInput } from "./GetIPSetInput";
import { GetIPSetOutput } from "./GetIPSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIPSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIPSetInput
  },
  output: {
    shape: GetIPSetOutput
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
