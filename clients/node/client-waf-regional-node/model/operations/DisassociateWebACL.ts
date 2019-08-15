import { DisassociateWebACLInput } from "../shapes/DisassociateWebACLInput";
import { DisassociateWebACLOutput } from "../shapes/DisassociateWebACLOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
