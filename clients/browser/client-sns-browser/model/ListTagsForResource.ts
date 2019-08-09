import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TagPolicyException } from "./TagPolicyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput,
    resultWrapper: "ListTagsForResourceResult"
  },
  errors: [
    {
      shape: ResourceNotFoundException
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
