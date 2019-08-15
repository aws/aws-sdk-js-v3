import { CreateRuleInput } from "../shapes/CreateRuleInput";
import { CreateRuleOutput } from "../shapes/CreateRuleOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFTagOperationException } from "../shapes/WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "../shapes/WAFTagOperationInternalErrorException";
import { WAFBadRequestException } from "../shapes/WAFBadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRuleInput
  },
  output: {
    shape: CreateRuleOutput
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
      shape: WAFInvalidParameterException
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
