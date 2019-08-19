import { SampleChannelDataInput } from "../shapes/SampleChannelDataInput";
import { SampleChannelDataOutput } from "../shapes/SampleChannelDataOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
