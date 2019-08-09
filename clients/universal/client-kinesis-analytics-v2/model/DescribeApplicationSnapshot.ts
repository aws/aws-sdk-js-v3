import { DescribeApplicationSnapshotInput } from "./DescribeApplicationSnapshotInput";
import { DescribeApplicationSnapshotOutput } from "./DescribeApplicationSnapshotOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
