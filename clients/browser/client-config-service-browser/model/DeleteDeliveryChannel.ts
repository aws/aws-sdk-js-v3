import { DeleteDeliveryChannelInput } from "./DeleteDeliveryChannelInput";
import { DeleteDeliveryChannelOutput } from "./DeleteDeliveryChannelOutput";
import { NoSuchDeliveryChannelException } from "./NoSuchDeliveryChannelException";
import { LastDeliveryChannelDeleteFailedException } from "./LastDeliveryChannelDeleteFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDeliveryChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeliveryChannel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDeliveryChannelInput
  },
  output: {
    shape: DeleteDeliveryChannelOutput
  },
  errors: [
    {
      shape: NoSuchDeliveryChannelException
    },
    {
      shape: LastDeliveryChannelDeleteFailedException
    }
  ]
};
