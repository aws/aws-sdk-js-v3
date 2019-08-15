import { ListResourcesForWebACLInput } from "../shapes/ListResourcesForWebACLInput";
import { ListResourcesForWebACLOutput } from "../shapes/ListResourcesForWebACLOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourcesForWebACL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourcesForWebACL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourcesForWebACLInput
  },
  output: {
    shape: ListResourcesForWebACLOutput
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
    },
    {
      shape: WAFInvalidParameterException
    }
  ]
};
