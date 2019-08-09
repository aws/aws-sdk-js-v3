import { CreateRegexMatchSetInput } from "./CreateRegexMatchSetInput";
import { CreateRegexMatchSetOutput } from "./CreateRegexMatchSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
