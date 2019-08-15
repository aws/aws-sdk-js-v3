import { UpdateSamplingRuleInput } from "../shapes/UpdateSamplingRuleInput";
import { UpdateSamplingRuleOutput } from "../shapes/UpdateSamplingRuleOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSamplingRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSamplingRule",
  http: {
    method: "POST",
    requestUri: "/UpdateSamplingRule"
  },
  input: {
    shape: UpdateSamplingRuleInput
  },
  output: {
    shape: UpdateSamplingRuleOutput
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
