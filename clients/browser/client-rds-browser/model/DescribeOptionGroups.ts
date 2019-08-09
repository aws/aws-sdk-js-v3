import { DescribeOptionGroupsInput } from "./DescribeOptionGroupsInput";
import { DescribeOptionGroupsOutput } from "./DescribeOptionGroupsOutput";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOptionGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOptionGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOptionGroupsInput
  },
  output: {
    shape: DescribeOptionGroupsOutput,
    resultWrapper: "DescribeOptionGroupsResult"
  },
  errors: [
    {
      shape: OptionGroupNotFoundFault
    }
  ]
};
