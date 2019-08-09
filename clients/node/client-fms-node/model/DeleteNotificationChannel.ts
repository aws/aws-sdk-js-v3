import { DeleteNotificationChannelInput } from "./DeleteNotificationChannelInput";
import { DeleteNotificationChannelOutput } from "./DeleteNotificationChannelOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteNotificationChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNotificationChannel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNotificationChannelInput
  },
  output: {
    shape: DeleteNotificationChannelOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: InternalErrorException
    }
  ]
};
