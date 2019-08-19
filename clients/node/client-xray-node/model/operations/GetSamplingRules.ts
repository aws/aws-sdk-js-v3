import { GetSamplingRulesInput } from "../shapes/GetSamplingRulesInput";
import { GetSamplingRulesOutput } from "../shapes/GetSamplingRulesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSamplingRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSamplingRules",
  http: {
    method: "POST",
    requestUri: "/GetSamplingRules"
  },
  input: {
    shape: GetSamplingRulesInput
  },
  output: {
    shape: GetSamplingRulesOutput
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
