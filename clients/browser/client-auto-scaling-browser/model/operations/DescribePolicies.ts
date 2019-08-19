import { DescribePoliciesInput } from "../shapes/DescribePoliciesInput";
import { DescribePoliciesOutput } from "../shapes/DescribePoliciesOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
