import { StartMatchBackfillInput } from "../shapes/StartMatchBackfillInput";
import { StartMatchBackfillOutput } from "../shapes/StartMatchBackfillOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartMatchBackfill: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartMatchBackfill",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartMatchBackfillInput
  },
  output: {
    shape: StartMatchBackfillOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnsupportedRegionException
    }
  ]
};
