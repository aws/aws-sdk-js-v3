import { TagDeliveryStreamInput } from "../shapes/TagDeliveryStreamInput";
import { TagDeliveryStreamOutput } from "../shapes/TagDeliveryStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagDeliveryStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagDeliveryStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagDeliveryStreamInput
  },
  output: {
    shape: TagDeliveryStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
