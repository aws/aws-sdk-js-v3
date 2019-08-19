import { SendTestEventNotificationInput } from "../shapes/SendTestEventNotificationInput";
import { SendTestEventNotificationOutput } from "../shapes/SendTestEventNotificationOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendTestEventNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendTestEventNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendTestEventNotificationInput
  },
  output: {
    shape: SendTestEventNotificationOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};
