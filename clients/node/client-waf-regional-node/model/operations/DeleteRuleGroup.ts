import { DeleteRuleGroupInput } from "../shapes/DeleteRuleGroupInput";
import { DeleteRuleGroupOutput } from "../shapes/DeleteRuleGroupOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { WAFInvalidOperationException } from "../shapes/WAFInvalidOperationException";
import { WAFTagOperationException } from "../shapes/WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "../shapes/WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRuleGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRuleGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRuleGroupInput
  },
  output: {
    shape: DeleteRuleGroupOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFReferencedItemException
    },
    {
      shape: WAFNonEmptyEntityException
    },
    {
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFTagOperationException
    },
    {
      shape: WAFTagOperationInternalErrorException
    }
  ]
};
