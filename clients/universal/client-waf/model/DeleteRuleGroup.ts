import { DeleteRuleGroupInput } from "./DeleteRuleGroupInput";
import { DeleteRuleGroupOutput } from "./DeleteRuleGroupOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
