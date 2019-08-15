import { AssociateWebACLInput } from "../shapes/AssociateWebACLInput";
import { AssociateWebACLOutput } from "../shapes/AssociateWebACLOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFUnavailableEntityException } from "../shapes/WAFUnavailableEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateWebACL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateWebACL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateWebACLInput
  },
  output: {
    shape: AssociateWebACLOutput
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
    },
    {
      shape: WAFUnavailableEntityException
    }
  ]
};
