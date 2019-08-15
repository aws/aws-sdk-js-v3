import { ListTagsForDeliveryStreamInput } from "../shapes/ListTagsForDeliveryStreamInput";
import { ListTagsForDeliveryStreamOutput } from "../shapes/ListTagsForDeliveryStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
