import { GetWebACLInput } from "./GetWebACLInput";
import { GetWebACLOutput } from "./GetWebACLOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
