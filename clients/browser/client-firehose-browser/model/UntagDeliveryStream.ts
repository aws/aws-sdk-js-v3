import { UntagDeliveryStreamInput } from "./UntagDeliveryStreamInput";
import { UntagDeliveryStreamOutput } from "./UntagDeliveryStreamOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
