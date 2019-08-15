import { CreateRuleGroupInput } from "../shapes/CreateRuleGroupInput";
import { CreateRuleGroupOutput } from "../shapes/CreateRuleGroupOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFTagOperationException } from "../shapes/WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "../shapes/WAFTagOperationInternalErrorException";
import { WAFBadRequestException } from "../shapes/WAFBadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
