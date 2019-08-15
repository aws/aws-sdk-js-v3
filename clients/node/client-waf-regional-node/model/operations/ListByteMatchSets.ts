import { ListByteMatchSetsInput } from "../shapes/ListByteMatchSetsInput";
import { ListByteMatchSetsOutput } from "../shapes/ListByteMatchSetsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListByteMatchSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListByteMatchSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListByteMatchSetsInput
  },
  output: {
    shape: ListByteMatchSetsOutput
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
