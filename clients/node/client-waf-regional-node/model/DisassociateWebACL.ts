import { DisassociateWebACLInput } from "./DisassociateWebACLInput";
import { DisassociateWebACLOutput } from "./DisassociateWebACLOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateWebACL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateWebACL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateWebACLInput
  },
  output: {
    shape: DisassociateWebACLOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
