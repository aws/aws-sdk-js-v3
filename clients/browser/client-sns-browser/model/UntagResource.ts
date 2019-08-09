import { UntagResourceInput } from "./UntagResourceInput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput,
    resultWrapper: "UntagResourceResult"
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
