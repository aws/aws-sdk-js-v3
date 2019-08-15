import { ListTagsForStreamInput } from "../shapes/ListTagsForStreamInput";
import { ListTagsForStreamOutput } from "../shapes/ListTagsForStreamOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidResourceFormatException } from "../shapes/InvalidResourceFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForStream",
  http: {
    method: "POST",
    requestUri: "/listTagsForStream"
  },
  input: {
    shape: ListTagsForStreamInput
  },
  output: {
    shape: ListTagsForStreamOutput
  },
  errors: [
    {
      shape: ClientLimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidResourceFormatException
    }
  ]
};
