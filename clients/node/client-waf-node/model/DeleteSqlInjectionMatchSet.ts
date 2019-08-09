import { DeleteSqlInjectionMatchSetInput } from "./DeleteSqlInjectionMatchSetInput";
import { DeleteSqlInjectionMatchSetOutput } from "./DeleteSqlInjectionMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
