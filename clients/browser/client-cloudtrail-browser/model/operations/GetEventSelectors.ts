import { GetEventSelectorsInput } from "../shapes/GetEventSelectorsInput";
import { GetEventSelectorsOutput } from "../shapes/GetEventSelectorsOutput";
import { TrailNotFoundException } from "../shapes/TrailNotFoundException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEventSelectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEventSelectors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEventSelectorsInput
  },
  output: {
    shape: GetEventSelectorsOutput
  },
  errors: [
    {
      shape: TrailNotFoundException
    },
    {
      shape: InvalidTrailNameException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
