import { SimulateCustomPolicyInput } from "./SimulateCustomPolicyInput";
import { SimulateCustomPolicyOutput } from "./SimulateCustomPolicyOutput";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyEvaluationException } from "./PolicyEvaluationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SimulateCustomPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SimulateCustomPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SimulateCustomPolicyInput
  },
  output: {
    shape: SimulateCustomPolicyOutput,
    resultWrapper: "SimulateCustomPolicyResult"
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyEvaluationException
    }
  ]
};
