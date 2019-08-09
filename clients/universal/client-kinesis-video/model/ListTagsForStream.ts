import { ListTagsForStreamInput } from "./ListTagsForStreamInput";
import { ListTagsForStreamOutput } from "./ListTagsForStreamOutput";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidResourceFormatException } from "./InvalidResourceFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
