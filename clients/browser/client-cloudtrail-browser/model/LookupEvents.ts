import { LookupEventsInput } from "./LookupEventsInput";
import { LookupEventsOutput } from "./LookupEventsOutput";
import { InvalidLookupAttributesException } from "./InvalidLookupAttributesException";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
