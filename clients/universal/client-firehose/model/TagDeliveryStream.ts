import { TagDeliveryStreamInput } from "./TagDeliveryStreamInput";
import { TagDeliveryStreamOutput } from "./TagDeliveryStreamOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
