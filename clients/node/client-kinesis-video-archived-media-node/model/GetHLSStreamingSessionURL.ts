import { GetHLSStreamingSessionURLInput } from "./GetHLSStreamingSessionURLInput";
import { GetHLSStreamingSessionURLOutput } from "./GetHLSStreamingSessionURLOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UnsupportedStreamMediaTypeException } from "./UnsupportedStreamMediaTypeException";
import { NoDataRetentionException } from "./NoDataRetentionException";
import { MissingCodecPrivateDataException } from "./MissingCodecPrivateDataException";
import { InvalidCodecPrivateDataException } from "./InvalidCodecPrivateDataException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
