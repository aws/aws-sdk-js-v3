import { LookupEventsInput } from "../shapes/LookupEventsInput";
import { LookupEventsOutput } from "../shapes/LookupEventsOutput";
import { InvalidLookupAttributesException } from "../shapes/InvalidLookupAttributesException";
import { InvalidTimeRangeException } from "../shapes/InvalidTimeRangeException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const LookupEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LookupEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: LookupEventsInput
  },
  output: {
    shape: LookupEventsOutput
  },
  errors: [
    {
      shape: InvalidLookupAttributesException
    },
    {
      shape: InvalidTimeRangeException
    },
    {
      shape: InvalidMaxResultsException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
