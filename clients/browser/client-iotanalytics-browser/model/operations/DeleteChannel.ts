import { DeleteChannelInput } from "../shapes/DeleteChannelInput";
import { DeleteChannelOutput } from "../shapes/DeleteChannelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
