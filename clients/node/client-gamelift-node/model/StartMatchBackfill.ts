import { StartMatchBackfillInput } from "./StartMatchBackfillInput";
import { StartMatchBackfillOutput } from "./StartMatchBackfillOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
