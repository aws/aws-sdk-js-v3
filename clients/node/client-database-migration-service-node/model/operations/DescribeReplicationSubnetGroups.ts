import { DescribeReplicationSubnetGroupsInput } from "../shapes/DescribeReplicationSubnetGroupsInput";
import { DescribeReplicationSubnetGroupsOutput } from "../shapes/DescribeReplicationSubnetGroupsOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReplicationSubnetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationSubnetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationSubnetGroupsInput
  },
  output: {
    shape: DescribeReplicationSubnetGroupsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
