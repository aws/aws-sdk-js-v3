import { SampleChannelDataInput } from "./SampleChannelDataInput";
import { SampleChannelDataOutput } from "./SampleChannelDataOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SampleChannelData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SampleChannelData",
  http: {
    method: "GET",
    requestUri: "/channels/{channelName}/sample"
  },
  input: {
    shape: SampleChannelDataInput
  },
  output: {
    shape: SampleChannelDataOutput
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
