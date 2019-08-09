import { ListResourcesForWebACLInput } from "./ListResourcesForWebACLInput";
import { ListResourcesForWebACLOutput } from "./ListResourcesForWebACLOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
