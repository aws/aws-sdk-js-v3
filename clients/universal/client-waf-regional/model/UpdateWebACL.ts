import { UpdateWebACLInput } from "./UpdateWebACLInput";
import { UpdateWebACLOutput } from "./UpdateWebACLOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFSubscriptionNotFoundException } from "./WAFSubscriptionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateWebACL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateWebACL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateWebACLInput
  },
  output: {
    shape: UpdateWebACLOutput
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
    },
    {
      shape: WAFSubscriptionNotFoundException
    }
  ]
};
