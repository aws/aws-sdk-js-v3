import { CreateSizeConstraintSetInput } from "./CreateSizeConstraintSetInput";
import { CreateSizeConstraintSetOutput } from "./CreateSizeConstraintSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
