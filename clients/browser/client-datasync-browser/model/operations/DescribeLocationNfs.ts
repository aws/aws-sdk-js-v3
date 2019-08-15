import { DescribeLocationNfsInput } from "../shapes/DescribeLocationNfsInput";
import { DescribeLocationNfsOutput } from "../shapes/DescribeLocationNfsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLocationNfs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLocationNfs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLocationNfsInput
  },
  output: {
    shape: DescribeLocationNfsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
