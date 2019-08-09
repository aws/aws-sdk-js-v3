import { GetSizeConstraintSetInput } from "./GetSizeConstraintSetInput";
import { GetSizeConstraintSetOutput } from "./GetSizeConstraintSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
