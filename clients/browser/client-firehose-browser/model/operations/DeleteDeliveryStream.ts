import { DeleteDeliveryStreamInput } from "../shapes/DeleteDeliveryStreamInput";
import { DeleteDeliveryStreamOutput } from "../shapes/DeleteDeliveryStreamOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDeliveryStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeliveryStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDeliveryStreamInput
  },
  output: {
    shape: DeleteDeliveryStreamOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
