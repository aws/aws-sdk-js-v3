import { GetNotificationChannelInput } from "../shapes/GetNotificationChannelInput";
import { GetNotificationChannelOutput } from "../shapes/GetNotificationChannelOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
