import { GetSamplingStatisticSummariesInput } from "./GetSamplingStatisticSummariesInput";
import { GetSamplingStatisticSummariesOutput } from "./GetSamplingStatisticSummariesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSamplingStatisticSummaries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSamplingStatisticSummaries",
  http: {
    method: "POST",
    requestUri: "/SamplingStatisticSummaries"
  },
  input: {
    shape: GetSamplingStatisticSummariesInput
  },
  output: {
    shape: GetSamplingStatisticSummariesOutput
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
