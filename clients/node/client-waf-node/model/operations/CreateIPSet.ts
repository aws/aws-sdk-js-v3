import { CreateIPSetInput } from "../shapes/CreateIPSetInput";
import { CreateIPSetOutput } from "../shapes/CreateIPSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIPSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateIPSetInput
  },
  output: {
    shape: CreateIPSetOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFDisallowedNameException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};
