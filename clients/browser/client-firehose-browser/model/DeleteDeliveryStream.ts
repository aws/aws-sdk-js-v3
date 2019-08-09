import { DeleteDeliveryStreamInput } from "./DeleteDeliveryStreamInput";
import { DeleteDeliveryStreamOutput } from "./DeleteDeliveryStreamOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
