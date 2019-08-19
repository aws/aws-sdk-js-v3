import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { ConcurrentAccessException } from "../shapes/ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
