import { PutNotificationChannelInput } from "./PutNotificationChannelInput";
import { PutNotificationChannelOutput } from "./PutNotificationChannelOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutNotificationChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutNotificationChannel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutNotificationChannelInput
  },
  output: {
    shape: PutNotificationChannelOutput
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
