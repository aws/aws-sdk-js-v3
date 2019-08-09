import { GetWebACLForResourceInput } from "./GetWebACLForResourceInput";
import { GetWebACLForResourceOutput } from "./GetWebACLForResourceOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFUnavailableEntityException } from "./WAFUnavailableEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetWebACLForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWebACLForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWebACLForResourceInput
  },
  output: {
    shape: GetWebACLForResourceOutput
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
    },
    {
      shape: WAFUnavailableEntityException
    }
  ]
};
