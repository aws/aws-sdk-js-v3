import { GetNotificationChannelInput } from "./GetNotificationChannelInput";
import { GetNotificationChannelOutput } from "./GetNotificationChannelOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNotificationChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNotificationChannel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetNotificationChannelInput
  },
  output: {
    shape: GetNotificationChannelOutput
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
