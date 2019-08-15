import { UpdateWebACLInput } from "../shapes/UpdateWebACLInput";
import { UpdateWebACLOutput } from "../shapes/UpdateWebACLOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidOperationException } from "../shapes/WAFInvalidOperationException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFNonexistentContainerException } from "../shapes/WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { WAFSubscriptionNotFoundException } from "../shapes/WAFSubscriptionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
