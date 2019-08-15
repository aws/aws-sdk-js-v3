import { DescribeKeyInput } from "../shapes/DescribeKeyInput";
import { DescribeKeyOutput } from "../shapes/DescribeKeyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeKeyInput
  },
  output: {
    shape: DescribeKeyOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    }
  ]
};
