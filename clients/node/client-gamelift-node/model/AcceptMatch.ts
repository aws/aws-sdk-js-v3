import { AcceptMatchInput } from "./AcceptMatchInput";
import { AcceptMatchOutput } from "./AcceptMatchOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
