import { DescribeAffectedEntitiesInput } from "../shapes/DescribeAffectedEntitiesInput";
import { DescribeAffectedEntitiesOutput } from "../shapes/DescribeAffectedEntitiesOutput";
import { InvalidPaginationToken } from "../shapes/InvalidPaginationToken";
import { UnsupportedLocale } from "../shapes/UnsupportedLocale";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAffectedEntities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAffectedEntities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAffectedEntitiesInput
  },
  output: {
    shape: DescribeAffectedEntitiesOutput
  },
  errors: [
    {
      shape: InvalidPaginationToken
    },
    {
      shape: UnsupportedLocale
    }
  ]
};
