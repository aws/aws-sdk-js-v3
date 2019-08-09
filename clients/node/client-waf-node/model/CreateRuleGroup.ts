import { CreateRuleGroupInput } from "./CreateRuleGroupInput";
import { CreateRuleGroupOutput } from "./CreateRuleGroupOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { WAFBadRequestException } from "./WAFBadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateRuleGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRuleGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRuleGroupInput
  },
  output: {
    shape: CreateRuleGroupOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFDisallowedNameException
    },
    {
      shape: WAFLimitsExceededException
    },
    {
      shape: WAFTagOperationException
    },
    {
      shape: WAFTagOperationInternalErrorException
    },
    {
      shape: WAFBadRequestException
    }
  ]
};
