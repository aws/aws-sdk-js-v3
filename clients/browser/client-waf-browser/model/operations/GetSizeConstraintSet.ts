import { GetSizeConstraintSetInput } from "../shapes/GetSizeConstraintSetInput";
import { GetSizeConstraintSetOutput } from "../shapes/GetSizeConstraintSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSizeConstraintSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSizeConstraintSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSizeConstraintSetInput
  },
  output: {
    shape: GetSizeConstraintSetOutput
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
