import { DescribePlacementGroupsInput } from "../shapes/DescribePlacementGroupsInput";
import { DescribePlacementGroupsOutput } from "../shapes/DescribePlacementGroupsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePlacementGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePlacementGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePlacementGroupsInput
  },
  output: {
    shape: DescribePlacementGroupsOutput
  },
  errors: []
};
