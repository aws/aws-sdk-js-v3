import { DescribeTerminationPolicyTypesInput } from "./DescribeTerminationPolicyTypesInput";
import { DescribeTerminationPolicyTypesOutput } from "./DescribeTerminationPolicyTypesOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTerminationPolicyTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTerminationPolicyTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTerminationPolicyTypesInput
  },
  output: {
    shape: DescribeTerminationPolicyTypesOutput,
    resultWrapper: "DescribeTerminationPolicyTypesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
