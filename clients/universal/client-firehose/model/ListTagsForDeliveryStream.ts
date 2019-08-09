import { ListTagsForDeliveryStreamInput } from "./ListTagsForDeliveryStreamInput";
import { ListTagsForDeliveryStreamOutput } from "./ListTagsForDeliveryStreamOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForDeliveryStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForDeliveryStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForDeliveryStreamInput
  },
  output: {
    shape: ListTagsForDeliveryStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
