import { GetGeoMatchSetInput } from "../shapes/GetGeoMatchSetInput";
import { GetGeoMatchSetOutput } from "../shapes/GetGeoMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
