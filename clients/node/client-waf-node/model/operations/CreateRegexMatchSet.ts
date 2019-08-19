import { CreateRegexMatchSetInput } from "../shapes/CreateRegexMatchSetInput";
import { CreateRegexMatchSetOutput } from "../shapes/CreateRegexMatchSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRegexMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRegexMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRegexMatchSetInput
  },
  output: {
    shape: CreateRegexMatchSetOutput
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
    }
  ]
};
