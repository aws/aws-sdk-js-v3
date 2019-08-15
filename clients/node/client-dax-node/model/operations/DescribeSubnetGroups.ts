import { DescribeSubnetGroupsInput } from "../shapes/DescribeSubnetGroupsInput";
import { DescribeSubnetGroupsOutput } from "../shapes/DescribeSubnetGroupsOutput";
import { SubnetGroupNotFoundFault } from "../shapes/SubnetGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
