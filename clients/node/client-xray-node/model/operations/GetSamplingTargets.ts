import { GetSamplingTargetsInput } from "../shapes/GetSamplingTargetsInput";
import { GetSamplingTargetsOutput } from "../shapes/GetSamplingTargetsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSamplingTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSamplingTargets",
  http: {
    method: "POST",
    requestUri: "/SamplingTargets"
  },
  input: {
    shape: GetSamplingTargetsInput
  },
  output: {
    shape: GetSamplingTargetsOutput
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
