import { ListChannelsInput } from "./ListChannelsInput";
import { ListChannelsOutput } from "./ListChannelsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListChannels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListChannels",
  http: {
    method: "GET",
    requestUri: "/channels"
  },
  input: {
    shape: ListChannelsInput
  },
  output: {
    shape: ListChannelsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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
