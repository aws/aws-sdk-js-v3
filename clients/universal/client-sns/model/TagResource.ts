import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
