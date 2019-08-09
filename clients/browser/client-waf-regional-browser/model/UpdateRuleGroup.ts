import { UpdateRuleGroupInput } from "./UpdateRuleGroupInput";
import { UpdateRuleGroupOutput } from "./UpdateRuleGroupOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRuleGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRuleGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRuleGroupInput
  },
  output: {
    shape: UpdateRuleGroupOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentContainerException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFLimitsExceededException
    },
    {
      shape: WAFInvalidParameterException
    }
  ]
};
