import { DescribeSubnetGroupsInput } from "./DescribeSubnetGroupsInput";
import { DescribeSubnetGroupsOutput } from "./DescribeSubnetGroupsOutput";
import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSubnetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSubnetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSubnetGroupsInput
  },
  output: {
    shape: DescribeSubnetGroupsOutput
  },
  errors: [
    {
      shape: SubnetGroupNotFoundFault
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    }
  ]
};
