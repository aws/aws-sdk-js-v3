import { SimulatePrincipalPolicyInput } from "./SimulatePrincipalPolicyInput";
import { SimulatePrincipalPolicyOutput } from "./SimulatePrincipalPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyEvaluationException } from "./PolicyEvaluationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
