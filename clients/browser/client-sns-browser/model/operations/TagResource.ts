import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TagLimitExceededException } from "../shapes/TagLimitExceededException";
import { StaleTagException } from "../shapes/StaleTagException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { ConcurrentAccessException } from "../shapes/ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput,
    resultWrapper: "TagResourceResult"
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TagLimitExceededException
    },
    {
      shape: StaleTagException
    },
    {
      shape: TagPolicyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: ConcurrentAccessException
    }
  ]
};
