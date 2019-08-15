import { CreateDeliveryStreamInput } from "../shapes/CreateDeliveryStreamInput";
import { CreateDeliveryStreamOutput } from "../shapes/CreateDeliveryStreamOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeliveryStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeliveryStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDeliveryStreamInput
  },
  output: {
    shape: CreateDeliveryStreamOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
