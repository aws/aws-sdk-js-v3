import { SimulateCustomPolicyInput } from "../shapes/SimulateCustomPolicyInput";
import { SimulateCustomPolicyOutput } from "../shapes/SimulateCustomPolicyOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyEvaluationException } from "../shapes/PolicyEvaluationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
