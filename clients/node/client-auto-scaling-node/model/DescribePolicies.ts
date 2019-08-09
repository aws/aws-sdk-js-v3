import { DescribePoliciesInput } from "./DescribePoliciesInput";
import { DescribePoliciesOutput } from "./DescribePoliciesOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePoliciesInput
  },
  output: {
    shape: DescribePoliciesOutput,
    resultWrapper: "DescribePoliciesResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    },
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
