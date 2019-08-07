import { GetTraceSummariesInput } from "./GetTraceSummariesInput";
import { GetTraceSummariesOutput } from "./GetTraceSummariesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTraceSummaries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTraceSummaries",
  http: {
    method: "POST",
    requestUri: "/TraceSummaries"
  },
  input: {
    shape: GetTraceSummariesInput
  },
  output: {
    shape: GetTraceSummariesOutput
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
