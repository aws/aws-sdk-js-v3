import { GetTraceGraphInput } from "../shapes/GetTraceGraphInput";
import { GetTraceGraphOutput } from "../shapes/GetTraceGraphOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
