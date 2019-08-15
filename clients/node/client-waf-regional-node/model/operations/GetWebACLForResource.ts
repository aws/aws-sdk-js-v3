import { GetWebACLForResourceInput } from "../shapes/GetWebACLForResourceInput";
import { GetWebACLForResourceOutput } from "../shapes/GetWebACLForResourceOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFUnavailableEntityException } from "../shapes/WAFUnavailableEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
