import { GetIPSetInput } from "../shapes/GetIPSetInput";
import { GetIPSetOutput } from "../shapes/GetIPSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
