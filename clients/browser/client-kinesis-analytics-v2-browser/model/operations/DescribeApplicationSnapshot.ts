import { DescribeApplicationSnapshotInput } from "../shapes/DescribeApplicationSnapshotInput";
import { DescribeApplicationSnapshotOutput } from "../shapes/DescribeApplicationSnapshotOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeApplicationSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApplicationSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeApplicationSnapshotInput
  },
  output: {
    shape: DescribeApplicationSnapshotOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
