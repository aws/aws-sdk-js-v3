import { GetHLSStreamingSessionURLInput } from "../shapes/GetHLSStreamingSessionURLInput";
import { GetHLSStreamingSessionURLOutput } from "../shapes/GetHLSStreamingSessionURLOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UnsupportedStreamMediaTypeException } from "../shapes/UnsupportedStreamMediaTypeException";
import { NoDataRetentionException } from "../shapes/NoDataRetentionException";
import { MissingCodecPrivateDataException } from "../shapes/MissingCodecPrivateDataException";
import { InvalidCodecPrivateDataException } from "../shapes/InvalidCodecPrivateDataException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHLSStreamingSessionURL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHLSStreamingSessionURL",
  http: {
    method: "POST",
    requestUri: "/getHLSStreamingSessionURL"
  },
  input: {
    shape: GetHLSStreamingSessionURLInput
  },
  output: {
    shape: GetHLSStreamingSessionURLOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UnsupportedStreamMediaTypeException
    },
    {
      shape: NoDataRetentionException
    },
    {
      shape: MissingCodecPrivateDataException
    },
    {
      shape: InvalidCodecPrivateDataException
    }
  ]
};
