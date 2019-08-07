import { PutTraceSegmentsInput } from "./PutTraceSegmentsInput";
import { PutTraceSegmentsOutput } from "./PutTraceSegmentsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutTraceSegments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutTraceSegments",
  http: {
    method: "POST",
    requestUri: "/TraceSegments"
  },
  input: {
    shape: PutTraceSegmentsInput
  },
  output: {
    shape: PutTraceSegmentsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
