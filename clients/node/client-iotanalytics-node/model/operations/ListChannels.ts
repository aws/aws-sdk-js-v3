import { ListChannelsInput } from "../shapes/ListChannelsInput";
import { ListChannelsOutput } from "../shapes/ListChannelsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
