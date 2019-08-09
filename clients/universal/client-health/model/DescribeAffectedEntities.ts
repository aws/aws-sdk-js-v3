import { DescribeAffectedEntitiesInput } from "./DescribeAffectedEntitiesInput";
import { DescribeAffectedEntitiesOutput } from "./DescribeAffectedEntitiesOutput";
import { InvalidPaginationToken } from "./InvalidPaginationToken";
import { UnsupportedLocale } from "./UnsupportedLocale";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
