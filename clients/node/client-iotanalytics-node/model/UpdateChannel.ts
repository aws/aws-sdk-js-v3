import { UpdateChannelInput } from "./UpdateChannelInput";
import { UpdateChannelOutput } from "./UpdateChannelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateChannel",
  http: {
    method: "PUT",
    requestUri: "/channels/{channelName}"
  },
  input: {
    shape: UpdateChannelInput
  },
  output: {
    shape: UpdateChannelOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
