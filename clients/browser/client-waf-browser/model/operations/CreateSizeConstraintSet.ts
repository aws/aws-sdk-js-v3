import { CreateSizeConstraintSetInput } from "../shapes/CreateSizeConstraintSetInput";
import { CreateSizeConstraintSetOutput } from "../shapes/CreateSizeConstraintSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSizeConstraintSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSizeConstraintSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSizeConstraintSetInput
  },
  output: {
    shape: CreateSizeConstraintSetOutput
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
