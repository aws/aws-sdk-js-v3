import { GetTraceSummariesInput } from "../shapes/GetTraceSummariesInput";
import { GetTraceSummariesOutput } from "../shapes/GetTraceSummariesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
