import { DeleteGeoMatchSetInput } from "../shapes/DeleteGeoMatchSetInput";
import { DeleteGeoMatchSetOutput } from "../shapes/DeleteGeoMatchSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGeoMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGeoMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGeoMatchSetInput
  },
  output: {
    shape: DeleteGeoMatchSetOutput
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
