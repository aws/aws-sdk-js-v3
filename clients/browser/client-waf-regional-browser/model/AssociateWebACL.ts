import { AssociateWebACLInput } from "./AssociateWebACLInput";
import { AssociateWebACLOutput } from "./AssociateWebACLOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFUnavailableEntityException } from "./WAFUnavailableEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
