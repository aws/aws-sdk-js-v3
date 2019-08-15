import { DeleteSamplingRuleInput } from "../shapes/DeleteSamplingRuleInput";
import { DeleteSamplingRuleOutput } from "../shapes/DeleteSamplingRuleOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSamplingRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSamplingRule",
  http: {
    method: "POST",
    requestUri: "/DeleteSamplingRule"
  },
  input: {
    shape: DeleteSamplingRuleInput
  },
  output: {
    shape: DeleteSamplingRuleOutput
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
