import { PutNotificationChannelInput } from "../shapes/PutNotificationChannelInput";
import { PutNotificationChannelOutput } from "../shapes/PutNotificationChannelOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
