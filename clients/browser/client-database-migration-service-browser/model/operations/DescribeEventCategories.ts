import { DescribeEventCategoriesInput } from "../shapes/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "../shapes/DescribeEventCategoriesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEventCategories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventCategories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventCategoriesInput
  },
  output: {
    shape: DescribeEventCategoriesOutput
  },
  errors: []
};
