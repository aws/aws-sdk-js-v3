import { GetGeoMatchSetInput } from "./GetGeoMatchSetInput";
import { GetGeoMatchSetOutput } from "./GetGeoMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGeoMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGeoMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetGeoMatchSetInput
  },
  output: {
    shape: GetGeoMatchSetOutput
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
    }
  ]
};
