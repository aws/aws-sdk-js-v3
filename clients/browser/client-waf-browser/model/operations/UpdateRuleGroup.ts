import { UpdateRuleGroupInput } from "../shapes/UpdateRuleGroupInput";
import { UpdateRuleGroupOutput } from "../shapes/UpdateRuleGroupOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentContainerException } from "../shapes/WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidOperationException } from "../shapes/WAFInvalidOperationException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
