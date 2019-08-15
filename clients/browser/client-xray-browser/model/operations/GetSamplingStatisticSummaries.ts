import { GetSamplingStatisticSummariesInput } from "../shapes/GetSamplingStatisticSummariesInput";
import { GetSamplingStatisticSummariesOutput } from "../shapes/GetSamplingStatisticSummariesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
