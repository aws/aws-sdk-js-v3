import { DeleteChannelInput } from "./DeleteChannelInput";
import { DeleteChannelOutput } from "./DeleteChannelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteChannel",
  http: {
    method: "DELETE",
    requestUri: "/channels/{channelName}"
  },
  input: {
    shape: DeleteChannelInput
  },
  output: {
    shape: DeleteChannelOutput
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
