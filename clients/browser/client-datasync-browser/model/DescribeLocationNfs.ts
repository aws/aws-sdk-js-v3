import { DescribeLocationNfsInput } from "./DescribeLocationNfsInput";
import { DescribeLocationNfsOutput } from "./DescribeLocationNfsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
