import { CreateDeliveryStreamInput } from "./CreateDeliveryStreamInput";
import { CreateDeliveryStreamOutput } from "./CreateDeliveryStreamOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
