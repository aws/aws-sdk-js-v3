import { CreateByteMatchSetInput } from "../shapes/CreateByteMatchSetInput";
import { CreateByteMatchSetOutput } from "../shapes/CreateByteMatchSetOutput";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateByteMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateByteMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateByteMatchSetInput
  },
  output: {
    shape: CreateByteMatchSetOutput
  },
  errors: [
    {
      shape: WAFDisallowedNameException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};
