import { ListIPSetsInput } from "./ListIPSetsInput";
import { ListIPSetsOutput } from "./ListIPSetsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
