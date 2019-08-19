import { ListIPSetsInput } from "../shapes/ListIPSetsInput";
import { ListIPSetsOutput } from "../shapes/ListIPSetsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIPSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIPSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIPSetsInput
  },
  output: {
    shape: ListIPSetsOutput
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
