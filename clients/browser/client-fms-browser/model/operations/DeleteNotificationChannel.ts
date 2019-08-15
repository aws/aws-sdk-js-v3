import { DeleteNotificationChannelInput } from "../shapes/DeleteNotificationChannelInput";
import { DeleteNotificationChannelOutput } from "../shapes/DeleteNotificationChannelOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
