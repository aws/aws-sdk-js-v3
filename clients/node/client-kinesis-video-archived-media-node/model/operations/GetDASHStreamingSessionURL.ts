import { GetDASHStreamingSessionURLInput } from "../shapes/GetDASHStreamingSessionURLInput";
import { GetDASHStreamingSessionURLOutput } from "../shapes/GetDASHStreamingSessionURLOutput";
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

export const GetDASHStreamingSessionURL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDASHStreamingSessionURL",
  http: {
    method: "POST",
    requestUri: "/getDASHStreamingSessionURL"
  },
  input: {
    shape: GetDASHStreamingSessionURLInput
  },
  output: {
    shape: GetDASHStreamingSessionURLOutput
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
