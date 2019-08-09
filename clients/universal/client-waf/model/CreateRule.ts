import { CreateRuleInput } from "./CreateRuleInput";
import { CreateRuleOutput } from "./CreateRuleOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { WAFBadRequestException } from "./WAFBadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
