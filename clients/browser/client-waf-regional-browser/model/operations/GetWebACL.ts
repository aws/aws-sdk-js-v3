import { GetWebACLInput } from "../shapes/GetWebACLInput";
import { GetWebACLOutput } from "../shapes/GetWebACLOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetWebACL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWebACL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWebACLInput
  },
  output: {
    shape: GetWebACLOutput
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
