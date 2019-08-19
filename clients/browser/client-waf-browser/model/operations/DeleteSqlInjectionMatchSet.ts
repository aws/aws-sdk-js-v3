import { DeleteSqlInjectionMatchSetInput } from "../shapes/DeleteSqlInjectionMatchSetInput";
import { DeleteSqlInjectionMatchSetOutput } from "../shapes/DeleteSqlInjectionMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSqlInjectionMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSqlInjectionMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSqlInjectionMatchSetInput
  },
  output: {
    shape: DeleteSqlInjectionMatchSetOutput
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
    },
    {
      shape: WAFReferencedItemException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFNonEmptyEntityException
    }
  ]
};
