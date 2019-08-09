import { DescribeDBSubnetGroupsInput } from "./DescribeDBSubnetGroupsInput";
import { DescribeDBSubnetGroupsOutput } from "./DescribeDBSubnetGroupsOutput";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBSubnetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBSubnetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBSubnetGroupsInput
  },
  output: {
    shape: DescribeDBSubnetGroupsOutput,
    resultWrapper: "DescribeDBSubnetGroupsResult"
  },
  errors: [
    {
      shape: DBSubnetGroupNotFoundFault
    }
  ]
};
