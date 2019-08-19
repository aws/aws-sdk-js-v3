import { SimulatePrincipalPolicyInput } from "../shapes/SimulatePrincipalPolicyInput";
import { SimulatePrincipalPolicyOutput } from "../shapes/SimulatePrincipalPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyEvaluationException } from "../shapes/PolicyEvaluationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SimulatePrincipalPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SimulatePrincipalPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SimulatePrincipalPolicyInput
  },
  output: {
    shape: SimulatePrincipalPolicyOutput,
    resultWrapper: "SimulatePrincipalPolicyResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyEvaluationException
    }
  ]
};
