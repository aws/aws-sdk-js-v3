import { UpdateChannelInput } from "../shapes/UpdateChannelInput";
import { UpdateChannelOutput } from "../shapes/UpdateChannelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
