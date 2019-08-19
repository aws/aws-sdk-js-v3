import { DeleteSizeConstraintSetInput } from "../shapes/DeleteSizeConstraintSetInput";
import { DeleteSizeConstraintSetOutput } from "../shapes/DeleteSizeConstraintSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSizeConstraintSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSizeConstraintSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSizeConstraintSetInput
  },
  output: {
    shape: DeleteSizeConstraintSetOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
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
      shape: WAFReferencedItemException
    },
    {
      shape: WAFNonEmptyEntityException
    }
  ]
};
