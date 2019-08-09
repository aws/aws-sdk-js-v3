import { GetEventSelectorsInput } from "./GetEventSelectorsInput";
import { GetEventSelectorsOutput } from "./GetEventSelectorsOutput";
import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
