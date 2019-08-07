import { GetTraceGraphInput } from "./GetTraceGraphInput";
import { GetTraceGraphOutput } from "./GetTraceGraphOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTraceGraph: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTraceGraph",
  http: {
    method: "POST",
    requestUri: "/TraceGraph"
  },
  input: {
    shape: GetTraceGraphInput
  },
  output: {
    shape: GetTraceGraphOutput
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
