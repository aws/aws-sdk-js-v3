import { AcceptMatchInput } from "../shapes/AcceptMatchInput";
import { AcceptMatchOutput } from "../shapes/AcceptMatchOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcceptMatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptMatch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptMatchInput
  },
  output: {
    shape: AcceptMatchOutput
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
