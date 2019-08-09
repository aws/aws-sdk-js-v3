import { DescribeReplicationGroupsInput } from "./DescribeReplicationGroupsInput";
import { DescribeReplicationGroupsOutput } from "./DescribeReplicationGroupsOutput";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReplicationGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationGroupsInput
  },
  output: {
    shape: DescribeReplicationGroupsOutput,
    resultWrapper: "DescribeReplicationGroupsResult"
  },
  errors: [
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
