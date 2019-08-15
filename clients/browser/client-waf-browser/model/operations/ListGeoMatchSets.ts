import { ListGeoMatchSetsInput } from "../shapes/ListGeoMatchSetsInput";
import { ListGeoMatchSetsOutput } from "../shapes/ListGeoMatchSetsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGeoMatchSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGeoMatchSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGeoMatchSetsInput
  },
  output: {
    shape: ListGeoMatchSetsOutput
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
