import { ListWebACLsInput } from "../shapes/ListWebACLsInput";
import { ListWebACLsOutput } from "../shapes/ListWebACLsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWebACLs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWebACLs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWebACLsInput
  },
  output: {
    shape: ListWebACLsOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    }
  ]
};
