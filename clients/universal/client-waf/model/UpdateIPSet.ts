import { UpdateIPSetInput } from "./UpdateIPSetInput";
import { UpdateIPSetOutput } from "./UpdateIPSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIPSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateIPSetInput
  },
  output: {
    shape: UpdateIPSetOutput
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
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFNonexistentContainerException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFReferencedItemException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};
