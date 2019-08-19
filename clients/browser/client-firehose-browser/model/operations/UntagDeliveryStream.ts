import { UntagDeliveryStreamInput } from "../shapes/UntagDeliveryStreamInput";
import { UntagDeliveryStreamOutput } from "../shapes/UntagDeliveryStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagDeliveryStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagDeliveryStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagDeliveryStreamInput
  },
  output: {
    shape: UntagDeliveryStreamOutput
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
